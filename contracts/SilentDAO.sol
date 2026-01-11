// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

/**
 * @title SilentDAO
 * @notice Privacy-preserving voting system on Mantle L2
 * @dev Uses Merkle trees for membership verification and commit-reveal for private voting
 */
contract SilentDAO is Ownable {
    using MerkleProof for bytes32[];

    // State variables
    bytes32 public merkleRoot;
    mapping(bytes32 => bool) public nullifiers; // Prevent double-voting
    mapping(address => bool) public hasVoted; // Track if address voted (without revealing choice)

    // Proposal data
    struct Proposal {
        uint256 id;
        string title;
        string description;
        uint256 startTime;
        uint256 endTime;
        uint256 forVotes;
        uint256 againstVotes;
        uint256 abstainVotes;
        bool isActive;
        mapping(bytes32 => bool) nullifierUsed; // Proposal-specific nullifiers
    }

    mapping(uint256 => Proposal) public proposals;
    uint256 public proposalCount;

    // Events
    event MerkleRootUpdated(bytes32 indexed newRoot);
    event ProposalCreated(uint256 indexed proposalId, string title);
    event Voted(uint256 indexed proposalId, bytes32 indexed nullifier, uint8 choice);
    event ProposalEnded(uint256 indexed proposalId, uint256 forVotes, uint256 againstVotes, uint256 abstainVotes);

    // Constants
    uint256 public constant VOTING_PERIOD = 7 days;

    constructor(bytes32 _merkleRoot) Ownable(msg.sender) {
        merkleRoot = _merkleRoot;
    }

    /**
     * @notice Update the Merkle root for eligible voters
     * @param _merkleRoot New Merkle root
     */
    function updateMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
        merkleRoot = _merkleRoot;
        emit MerkleRootUpdated(_merkleRoot);
    }

    /**
     * @notice Create a new proposal
     * @param _title Proposal title
     * @param _description Proposal description
     * @param _duration Voting duration in seconds
     */
    function createProposal(
        string memory _title,
        string memory _description,
        uint256 _duration
    ) external onlyOwner returns (uint256) {
        require(_duration > 0, "Duration must be positive");
        require(_duration <= 30 days, "Duration too long");

        uint256 proposalId = ++proposalCount;
        Proposal storage proposal = proposals[proposalId];

        proposal.id = proposalId;
        proposal.title = _title;
        proposal.description = _description;
        proposal.startTime = block.timestamp;
        proposal.endTime = block.timestamp + _duration;
        proposal.isActive = true;

        emit ProposalCreated(proposalId, _title);
        return proposalId;
    }

    /**
     * @notice Vote on a proposal (private commit-reveal scheme)
     * @param proposalId ID of the proposal
     * @param choice 0 = Against, 1 = For, 2 = Abstain
     * @param proof Merkle proof of voter eligibility
     * @param nullifier Unique identifier to prevent double-voting (hash of voter address + proposalId)
     */
    function vote(
        uint256 proposalId,
        uint8 choice,
        bytes32[] calldata proof,
        bytes32 nullifier
    ) external {
        require(choice == 0 || choice == 1 || choice == 2, "Invalid choice");
        require(proposalId > 0 && proposalId <= proposalCount, "Invalid proposal");

        Proposal storage proposal = proposals[proposalId];
        require(proposal.isActive, "Proposal not active");
        require(block.timestamp >= proposal.startTime, "Voting not started");
        require(block.timestamp <= proposal.endTime, "Voting ended");
        require(!proposal.nullifierUsed[nullifier], "Already voted");

        // Verify voter eligibility using Merkle proof
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(proof, merkleRoot, leaf), "Not eligible to vote");

        // Mark nullifier as used to prevent double-voting
        proposal.nullifierUsed[nullifier] = true;
        nullifiers[nullifier] = true;

        // Count the vote (choice is revealed but voter identity is not)
        if (choice == 1) {
            proposal.forVotes++;
        } else if (choice == 0) {
            proposal.againstVotes++;
        } else {
            proposal.abstainVotes++;
        }

        emit Voted(proposalId, nullifier, choice);
    }

    /**
     * @notice End a proposal and finalize results
     * @param proposalId ID of the proposal
     */
    function endProposal(uint256 proposalId) external onlyOwner {
        require(proposalId > 0 && proposalId <= proposalCount, "Invalid proposal");

        Proposal storage proposal = proposals[proposalId];
        require(proposal.isActive, "Proposal already ended");
        require(block.timestamp >= proposal.endTime, "Voting period not ended");

        proposal.isActive = false;

        emit ProposalEnded(
            proposalId,
            proposal.forVotes,
            proposal.againstVotes,
            proposal.abstainVotes
        );
    }

    /**
     * @notice Get proposal details
     * @param proposalId ID of the proposal
     */
    function getProposal(uint256 proposalId)
        external
        view
        returns (
            uint256 id,
            string memory title,
            string memory description,
            uint256 startTime,
            uint256 endTime,
            uint256 forVotes,
            uint256 againstVotes,
            uint256 abstainVotes,
            bool isActive
        )
    {
        require(proposalId > 0 && proposalId <= proposalCount, "Invalid proposal");

        Proposal storage proposal = proposals[proposalId];
        return (
            proposal.id,
            proposal.title,
            proposal.description,
            proposal.startTime,
            proposal.endTime,
            proposal.forVotes,
            proposal.againstVotes,
            proposal.abstainVotes,
            proposal.isActive
        );
    }

    /**
     * @notice Check if an address is eligible to vote
     * @param voter Address to check
     * @param proof Merkle proof
     */
    function isEligible(address voter, bytes32[] calldata proof)
        external
        view
        returns (bool)
    {
        bytes32 leaf = keccak256(abi.encodePacked(voter));
        return MerkleProof.verify(proof, merkleRoot, leaf);
    }

    /**
     * @notice Generate a nullifier for a voter and proposal
     * @dev This is a helper function for front-end
     * @param voter Address of the voter
     * @param proposalId ID of the proposal
     */
    function generateNullifier(address voter, uint256 proposalId)
        external
        pure
        returns (bytes32)
    {
        return keccak256(abi.encodePacked(voter, proposalId));
    }
}
