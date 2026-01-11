const hre = require("hardhat");

async function main() {
  console.log("Deploying SilentDAO to Mantle Testnet...");

  // Default Merkle root (replace with actual root from your voter list)
  // This is a placeholder - in production, generate this from your eligible voter list
  const defaultMerkleRoot = "0x0000000000000000000000000000000000000000000000000000000000000000";

  // Deploy SilentDAO contract
  const SilentDAO = await hre.ethers.getContractFactory("SilentDAO");
  const silentDAO = await SilentDAO.deploy(defaultMerkleRoot);

  await silentDAO.waitForDeployment();
  const address = await silentDAO.getAddress();

  console.log("SilentDAO deployed to:", address);
  console.log("Network:", hre.network.name);
  console.log("\nNext steps:");
  console.log("1. Update your Merkle root using updateMerkleRoot()");
  console.log("2. Create proposals using createProposal()");
  console.log("3. Verify on Mantle explorer: https://sepolia.mantle.xyz/address/" + address);

  // Save deployment info
  const fs = require("fs");
  const deploymentInfo = {
    network: hre.network.name,
    address: address,
    deploymentDate: new Date().toISOString(),
    merkleRoot: defaultMerkleRoot
  };

  fs.writeFileSync(
    "./deployment.json",
    JSON.stringify(deploymentInfo, null, 2)
  );
  console.log("\nDeployment info saved to deployment.json");

  return address;
}

// Execute deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
