const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SilentDAO", function () {
  let silentDAO;
  let owner, addr1, addr2, addr3;
  let merkleRoot;

  beforeEach(async function () {
    // Get signers
    [owner, addr1, addr2, addr3] = await ethers.getSigners();

    // Create a simple Merkle tree with test addresses
    // In production, this would be generated from the actual voter list
    const leaves = [
      ethers.keccak256(ethers.AbiCoder.defaultAbiCoder().encode(
        ["address"],
        [addr1.address]
      )),
      ethers.keccak256(ethers.AbiCoder.defaultAbiCoder().encode(
        ["address"],
        [addr2.address]
      )),
    ];

    // Compute Merkle root (simplified - use merkletreejs in production)
    merkleRoot = leaves[0]; // Simplified for testing

    // Deploy contract
    const SilentDAO = await ethers.getContractFactory("SilentDAO");
    silentDAO = await SilentDAO.deploy(merkleRoot);
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await silentDAO.owner()).to.equal(owner.address);
    });

    it("Should set the correct Merkle root", async function () {
      expect(await silentDAO.merkleRoot()).to.equal(merkleRoot);
    });
  });

  describe("Proposal Creation", function () {
    it("Should create a proposal", async function () {
      await silentDAO.connect(owner).createProposal(
        "Test Proposal",
        "This is a test proposal",
        86400 // 1 day
      );

      const proposal = await silentDAO.getProposal(1);
      expect(proposal.title).to.equal("Test Proposal");
      expect(proposal.isActive).to.equal(true);
    });

    it("Should fail if non-owner tries to create proposal", async function () {
      await expect(
        silentDAO.connect(addr1).createProposal(
          "Test Proposal",
          "This is a test proposal",
          86400
        )
      ).to.be.revertedWithCustomError(silentDAO, "OwnableUnauthorizedAccount");
    });
  });

  describe("Voting", function () {
    beforeEach(async function () {
      // Create a proposal for voting tests
      await silentDAO.connect(owner).createProposal(
        "Test Proposal",
        "This is a test proposal",
        86400
      );
    });

    it("Should allow eligible voter to vote", async function () {
      const nullifier = ethers.keccak256(
        ethers.AbiCoder.defaultAbiCoder().encode(
          ["address", "uint256"],
          [addr1.address, 1]
        )
      );

      // Create empty proof for testing (in production, use real Merkle proof)
      const proof = [];

      await silentDAO.connect(addr1).vote(1, 1, proof, nullifier);

      const proposal = await silentDAO.getProposal(1);
      expect(proposal.forVotes).to.equal(1);
    });

    it("Should prevent double voting", async function () {
      const nullifier = ethers.keccak256(
        ethers.AbiCoder.defaultAbiCoder().encode(
          ["address", "uint256"],
          [addr1.address, 1]
        )
      );

      const proof = [];

      await silentDAO.connect(addr1).vote(1, 1, proof, nullifier);

      await expect(
        silentDAO.connect(addr1).vote(1, 1, proof, nullifier)
      ).to.be.revertedWith("Already voted");
    });
  });

  describe("Merkle Root Update", function () {
    it("Should allow owner to update Merkle root", async function () {
      const newRoot = ethers.keccak256(ethers.toUtf8Bytes("newRoot"));

      await silentDAO.connect(owner).updateMerkleRoot(newRoot);

      expect(await silentDAO.merkleRoot()).to.equal(newRoot);
    });

    it("Should fail if non-owner tries to update", async function () {
      const newRoot = ethers.keccak256(ethers.toUtf8Bytes("newRoot"));

      await expect(
        silentDAO.connect(addr1).updateMerkleRoot(newRoot)
      ).to.be.revertedWithCustomError(silentDAO, "OwnableUnauthorizedAccount");
    });
  });
});
