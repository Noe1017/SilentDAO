// Merkle Tree utilities for SilentDAO
import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'

/**
 * Generate a Merkle tree from a list of addresses
 * @param {string[]} addresses - Array of eligible voter addresses
 * @returns {MerkleTree} - Merkle tree instance
 */
export const generateMerkleTree = (addresses) => {
  const leaves = addresses.map(address => {
    // Validate address format
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      throw new Error(`Invalid address format: ${address}`)
    }
    return keccak256(address)
  })

  return new MerkleTree(leaves, keccak256, { sortPairs: true })
}

/**
 * Get the Merkle root from a tree
 * @param {MerkleTree} tree - Merkle tree instance
 * @returns {string} - Merkle root as hex string
 */
export const getMerkleRoot = (tree) => {
  return '0x' + tree.getRoot().toString('hex')
}

/**
 * Generate a Merkle proof for a specific address
 * @param {MerkleTree} tree - Merkle tree instance
 * @param {string} address - Address to generate proof for
 * @returns {string[]} - Array of proof hashes
 */
export const getMerkleProof = (tree, address) => {
  const leaf = keccak256(address)
  const proof = tree.getProof(leaf)
  return proof.map(x => '0x' + x.data.toString('hex'))
}

/**
 * Verify a Merkle proof
 * @param {MerkleTree} tree - Merkle tree instance
 * @param {string} address - Address to verify
 * @param {string[]} proof - Merkle proof
 * @returns {boolean} - True if proof is valid
 */
export const verifyMerkleProof = (tree, address, proof) => {
  const leaf = keccak256(address)
  const proofBuffers = proof.map(p => Buffer.from(p.slice(2), 'hex'))
  return tree.verify(proofBuffers, leaf, tree.getRoot())
}

/**
 * Generate a nullifier for a voter and proposal
 * @param {string} address - Voter address
 * @param {number|string} proposalId - Proposal ID
 * @returns {string} - Nullifier hash
 */
export const generateNullifier = (address, proposalId) => {
  const Web3 = require('web3')
  const web3 = new Web3()
  return web3.utils.soliditySha3(
    { type: 'address', value: address },
    { type: 'uint256', value: proposalId }
  )
}

/**
 * Example: Create a demo Merkle tree with test addresses
 * @returns {Object} - Tree, root, and sample proofs
 */
export const createDemoMerkleTree = () => {
  // Demo addresses (replace with actual eligible voters)
  const demoAddresses = [
    '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1',
    '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed',
    '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359',
    '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
    '0xFABB0ac9d68B0B445fB7357272Ff20227552509'
  ]

  const tree = generateMerkleTree(demoAddresses)
  const root = getMerkleRoot(tree)

  // Generate proofs for each address
  const proofs = {}
  demoAddresses.forEach(address => {
    proofs[address] = getMerkleProof(tree, address)
  })

  return {
    tree,
    root,
    addresses: demoAddresses,
    proofs
  }
}

/**
 * Check if an address is in the Merkle tree
 * @param {MerkleTree} tree - Merkle tree instance
 * @param {string} address - Address to check
 * @returns {boolean} - True if address is in tree
 */
export const isAddressInTree = (tree, address) => {
  try {
    const leaf = keccak256(address)
    return tree.verify([], leaf, tree.getRoot())
  } catch {
    return false
  }
}
