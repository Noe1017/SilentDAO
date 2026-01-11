# SilentDAO
**Privacy-Preserving Governance Voting on Mantle L2**

SilentDAO enables DAOs on Mantle to conduct anonymous, verifiable, and tamper-proof governance voting, protecting members from coercion and whale dominance.

---

## Table of Contents
1. [Problem](#problem)
2. [Solution](#solution)
3. [Demo](#demo)
4. [Architecture](#architecture)
5. [Key Features](#key-features)
6. [Technology Stack](#technology-stack)
7. [Future Enhancements](#future-enhancements)
8. [Getting Started](#getting-started)
9. [Contact](#contact)

---

## Problem
Current DAO governance voting suffers from several issues:

- **Public Voting**: Addresses and choices are visible, leading to whale dominance and small participant coercion.
- **Coercion & Bribery Risk**: Votes can be influenced by external incentives because everything is verifiable and transparent.
- **Low Participation**: Members are discouraged from voting due to social or financial pressure.

SilentDAO addresses these challenges by providing **anonymous, verifiable, and low-cost voting** on Mantle.

---

## Solution
SilentDAO adds a privacy layer on top of Mantle's L2:

1. **Eligibility Proof (ZK Membership Proof)**: Verify voters are qualified without revealing identities.
2. **Private Vote Commitment**: Votes are hashed/committed on-chain to ensure privacy.
3. **Anti-Replay (Nullifier)**: Each voter can only vote once, preventing double-voting.
4. **Verifiable Tally**: Votes are counted and results can be verified on-chain, preserving anonymity.

---

## Demo
We prepared a 3–5 minute demo to showcase SilentDAO:

1. **Step 0: Problem Intro**
   - Compare public voting vs SilentDAO voting.

2. **Step 1: Create Proposal**
   - DAO admin creates a vote on the front-end.

3. **Step 2: Submit Anonymous Vote**
   - Voter submits vote using ZK Membership Proof.
   - Vote content remains private on-chain.

4. **Step 3: Prevent Double Voting**
   - System rejects duplicate votes using Nullifier logic.

5. **Step 4: Tally Results**
   - Display anonymous, verifiable results on-chain.

6. **Step 5: Verify Results**
   - Anyone can verify vote integrity without revealing identities.

> The demo shows **anonymous voting + verifiable results + low-cost execution** on Mantle.

---

## Architecture

```

User Wallet
↓
ZK Membership Proof
↓
Vote Commitment (hashed on-chain)
↓
Mantle Smart Contract
↓
Vote Verification & Storage
↓
Final Tally (Verifiable & Anonymous)

```

---

## Key Features
- **Privacy-Preserving Voting**: Protect voter identities while maintaining integrity.
- **Anti-Whale & Coercion Resistant**: Reduce governance manipulation risk.
- **Low-Cost Participation**: Powered by Mantle L2, enabling wide adoption.
- **Modular Design**: Can be plugged into any Mantle-based DAO.

---

## Technology Stack
- **Smart Contracts**: Solidity / Mantle L2
- **Front-end**: React + Mantle SDK
- **Privacy Layer**: ZK Proofs or Merkle Tree Commitments
- **Wallets**: MetaMask / Test Wallet
- **Deployment**: Mantle Testnet

---

## Future Enhancements
- Delegated / Weighted voting
- Multi-option voting
- Privacy Snapshots & analytics
- Automated treasury execution based on vote outcome

---

## Getting Started
1. Clone the repo
```bash
git clone https://github.com/Noe1017/SilentDAO.git
```

2. Install dependencies

```bash
cd SilentDAO
npm install
```

3. Deploy smart contracts on Mantle testnet

```bash
npx hardhat run scripts/deploy.js --network mantleTestnet
```

4. Run front-end

```bash
npm run dev
```

---

## Contact

Project Lead: **Noe1017**
GitHub: [Noe1017/SilentDAO](https://github.com/Noe1017/SilentDAO)

---
