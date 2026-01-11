const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const fs = require('fs');
const readline = require('readline');

/**
 * Generate Merkle Tree for SilentDAO eligible voters
 */

// Sample eligible voters (replace with your actual list)
const SAMPLE_VOTERS = [
  '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed',
  '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359',
  '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
  '0x3C5E2C64B9A61BC8e81E3Dbab9Fd8c0339C2015B',
  '0xeD786bdB87E31da7C8470B83251F8913b1cB3A87'
];

function generateMerkleTree(addresses) {
  // Validate addresses
  addresses.forEach(addr => {
    if (!/^0x[a-fA-F0-9]{40}$/.test(addr)) {
      throw new Error(`Invalid address: ${addr}`);
    }
  });

  // Generate leaves
  const leaves = addresses.map(addr => keccak256(addr));

  // Create tree
  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

  return {
    tree,
    root: '0x' + tree.getRoot().toString('hex'),
    leaves: leaves.map(leaf => '0x' + leaf.toString('hex'))
  };
}

function generateProofs(tree, addresses) {
  const proofs = {};

  addresses.forEach(address => {
    const leaf = keccak256(address);
    const proof = tree.getProof(leaf);
    proofs[address.toLowerCase()] = proof.map(p => '0x' + p.data.toString('hex'));
  });

  return proofs;
}

function main() {
  console.log('\n🌳 SilentDAO Merkle Tree Generator\n');

  // Use sample voters or custom list
  const useSample = process.argv.includes('--sample') || process.argv.length <= 2;

  let addresses;

  if (useSample) {
    console.log('Using sample voter addresses...\n');
    addresses = SAMPLE_VOTERS;
  } else {
    // Read addresses from command line arguments
    addresses = process.argv.slice(2);
    console.log(`Generating tree for ${addresses.length} addresses...\n`);
  }

  try {
    // Generate tree
    const { tree, root, leaves } = generateMerkleTree(addresses);

    console.log('✅ Merkle Tree Generated Successfully!\n');
    console.log('📊 Statistics:');
    console.log(`   - Total Voters: ${addresses.length}`);
    console.log(`   - Merkle Root: ${root}\n`);

    // Generate proofs
    const proofs = generateProofs(tree, addresses);
    console.log('✅ Proofs Generated for all voters\n');

    // Save to file
    const output = {
      merkleRoot: root,
      totalVoters: addresses.length,
      voters: addresses.map((addr, index) => ({
        index,
        address: addr,
        leaf: leaves[index],
        proof: proofs[addr.toLowerCase()]
      })),
      generatedAt: new Date().toISOString()
    };

    fs.writeFileSync(
      './merkleTree.json',
      JSON.stringify(output, null, 2)
    );

    console.log('💾 Saved to: ./merkleTree.json\n');

    // Display sample proof
    const sampleAddr = addresses[0];
    const sampleProof = proofs[sampleAddr.toLowerCase()];

    console.log('📝 Sample Proof for ' + sampleAddr + ':');
    console.log('   Proof:', JSON.stringify(sampleProof));
    console.log('\n');

    console.log('🔧 Next Steps:');
    console.log('   1. Update contract Merkle Root:');
    console.log(`      silentDAO.updateMerkleRoot("${root}")`);
    console.log('   2. Copy merkleTree.json to frontend/src/data/');
    console.log('   3. Use proofs when voting\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateMerkleTree, generateProofs };
