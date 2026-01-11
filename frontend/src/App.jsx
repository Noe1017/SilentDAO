import { useState, useEffect } from 'react'
import WalletConnect from './components/WalletConnect'
import ProposalList from './components/ProposalList'
import CreateProposal from './components/CreateProposal'
import './App.css'

function App() {
  const [account, setAccount] = useState(null)
  const [activeTab, setActiveTab] = useState('proposals')

  const handleConnect = (address) => {
    setAccount(address)
  }

  const handleDisconnect = () => {
    setAccount(null)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src="/logo.svg" alt="SilentDAO Logo" className="logo-icon" />
              <div className="logo-text">
                <h1>SilentDAO</h1>
                <p className="tagline">Privacy-Preserving Governance</p>
              </div>
            </div>
            <WalletConnect
              account={account}
              onConnect={handleConnect}
              onDisconnect={handleDisconnect}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content">
              <h2>Vote Anonymously.<br />Govern Securely.</h2>
              <p>
                SilentDAO enables private, verifiable voting on Mantle L2.
                Protect your privacy while participating in DAO governance.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Private</div>
                </div>
                <div className="stat">
                  <div className="stat-value">ZK</div>
                  <div className="stat-label">Verified</div>
                </div>
                <div className="stat">
                  <div className="stat-value">$0.01</div>
                  <div className="stat-label">Per Vote</div>
                </div>
              </div>
            </div>
          </section>

          {/* Connected Content */}
          {account ? (
            <div className="connected-content">
              {/* Tabs */}
              <div className="tabs">
                <button
                  className={`tab ${activeTab === 'proposals' ? 'active' : ''}`}
                  onClick={() => setActiveTab('proposals')}
                >
                  Proposals
                </button>
                <button
                  className={`tab ${activeTab === 'create' ? 'active' : ''}`}
                  onClick={() => setActiveTab('create')}
                >
                  Create Proposal
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'proposals' && (
                <ProposalList account={account} />
              )}
              {activeTab === 'create' && (
                <CreateProposal account={account} />
              )}
            </div>
          ) : (
            <div className="connect-prompt">
              <div className="card">
                <h3>Connect Your Wallet</h3>
                <p>
                  Connect your wallet to start voting on SilentDAO proposals.
                  Make sure you're on Mantle Sepolia Testnet.
                </p>
                <div className="network-info">
                  <div className="info-item">
                    <strong>Network:</strong> Mantle Sepolia Testnet
                  </div>
                  <div className="info-item">
                    <strong>Chain ID:</strong> 5003
                  </div>
                  <div className="info-item">
                    <strong>RPC:</strong> https://rpc.sepolia.mantle.xyz
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 SilentDAO. Built for Mantle Global Hackathon.</p>
            <div className="footer-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://docs.mantle.xyz" target="_blank" rel="noopener noreferrer">Docs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
