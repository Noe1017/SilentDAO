# SilentDAO Frontend

Frontend application for SilentDAO - Privacy-Preserving Governance Voting on Mantle L2.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Ethers.js v6** - Web3 library
- **MerkleTree.js** - Merkle tree generation
- **CSS3** - Custom styling

## Getting Started

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Configure Environment

Create a `.env` file in the frontend directory:

```bash
cp .env.example .env
```

Update the variables with your deployed contract address:
```
VITE_CONTRACT_ADDRESS=your_deployed_contract_address
VITE_MERKLE_ROOT=your_merkle_root
```

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Features

- ✨ **Wallet Connection** - MetaMask integration with automatic network switching
- 🔐 **Private Voting** - Anonymous voting with Merkle proof verification
- 📊 **Proposal Management** - View and vote on active proposals
- ➕ **Create Proposals** - Create new governance proposals
- 🎨 **Modern UI** - Beautiful, responsive dark theme design

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── WalletConnect.jsx
│   │   ├── ProposalList.jsx
│   │   ├── VotePanel.jsx
│   │   └── CreateProposal.jsx
│   ├── utils/           # Utility functions
│   │   ├── contract.js
│   │   └── merkleTree.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## Network Configuration

The app is configured for **Mantle Sepolia Testnet**:
- Chain ID: 5003 (0x138B)
- RPC: https://rpc.sepolia.mantle.xyz
- Explorer: https://sepolia.mantle.xyz

## Smart Contract Integration

The frontend interacts with the following contract functions:

### View Functions
- `getProposal(proposalId)` - Get proposal details
- `isEligible(voter, proof)` - Check if address can vote

### Write Functions
- `createProposal(title, description, duration)` - Create new proposal
- `vote(proposalId, choice, proof, nullifier)` - Submit anonymous vote
- `updateMerkleRoot(newRoot)` - Update voter eligibility tree

## Development Tips

1. **MetaMask Setup**: Make sure you have MetaMask installed and are on Mantle Sepolia Testnet
2. **Test Tokens**: Get test MNT from the Mantle faucet
3. **Contract Address**: Update `VITE_CONTRACT_ADDRESS` after deploying your contract
4. **Merkle Root**: Generate and update the Merkle root with your eligible voters

## Troubleshooting

### "MetaMask not found"
- Install MetaMask browser extension
- Refresh the page after installation

### "Wrong network"
- Click "Connect Wallet" - it will automatically prompt to switch to Mantle Sepolia
- Or manually add Mantle Sepolia Testnet in MetaMask

### "Failed to load proposals"
- Ensure your contract is deployed and address is correct in `.env`
- Check browser console for specific errors
- Verify you're on the correct network

## Future Enhancements

- [ ] Real-time updates with WebSocket
- [ ] Proposal history and archiving
- [ ] Delegate voting support
- [ ] Multi-choice voting options
- [ ] Governance analytics dashboard
- [ ] Mobile app version
