// Contract configuration for SilentDAO
export const CONTRACT_CONFIG = {
  // Deployed contract address (update after deployment)
  address: import.meta.env.VITE_CONTRACT_ADDRESS || '0x0000000000000000000000000000000000000000',

  // Contract ABI (simplified - add full ABI after compilation)
  abi: [
    "function merkleRoot() view returns (bytes32)",
    "function proposalCount() view returns (uint256)",
    "function getProposal(uint256 proposalId) view returns (uint256 id, string title, string description, uint256 startTime, uint256 endTime, uint256 forVotes, uint256 againstVotes, uint256 abstainVotes, bool isActive)",
    "function createProposal(string title, string description, uint256 duration)",
    "function vote(uint256 proposalId, uint8 choice, bytes32[] proof, bytes32 nullifier)",
    "function updateMerkleRoot(bytes32 newRoot)",
    "function isEligible(address voter, bytes32[] proof) view returns (bool)",
    "function generateNullifier(address voter, uint256 proposalId) pure returns (bytes32)",
    "event ProposalCreated(uint256 indexed proposalId, string title)",
    "event Voted(uint256 indexed proposalId, bytes32 indexed nullifier, uint8 choice)",
    "event ProposalEnded(uint256 indexed proposalId, uint256 forVotes, uint256 againstVotes, uint256 abstainVotes)"
  ],

  // Network configuration
  network: {
    chainId: '0x138B', // 5003 in hex (Mantle Sepolia Testnet)
    chainName: 'Mantle Sepolia Testnet',
    nativeCurrency: {
      name: 'Mantle',
      symbol: 'MNT',
      decimals: 18
    },
    rpcUrls: ['https://rpc.sepolia.mantle.xyz'],
    blockExplorerUrls: ['https://sepolia.mantle.xyz']
  }
}

// Helper function to get contract instance
export const getContract = (providerOrSigner) => {
  if (!window.ethers) {
    throw new Error('Ethers.js not loaded')
  }

  return new window.ethers.Contract(
    CONTRACT_CONFIG.address,
    CONTRACT_CONFIG.abi,
    providerOrSigner
  )
}

// Helper function to switch to Mantle network
export const switchToMantleNetwork = async () => {
  if (!window.ethereum) {
    throw new Error('MetaMask not installed')
  }

  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: CONTRACT_CONFIG.network.chainId }]
    })
  } catch (error) {
    // This error code indicates that the chain has not been added to MetaMask
    if (error.code === 4902) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [CONTRACT_CONFIG.network]
      })
    } else {
      throw error
    }
  }
}

// Helper function to check if user is on correct network
export const isCorrectNetwork = async () => {
  if (!window.ethereum) return false

  const chainId = await window.ethereum.request({
    method: 'eth_chainId'
  })

  return chainId.toLowerCase() === CONTRACT_CONFIG.network.chainId.toLowerCase()
}
