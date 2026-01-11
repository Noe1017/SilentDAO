import { useState, useEffect } from 'react'
import VotePanel from './VotePanel'
import './ProposalList.css'

function ProposalList({ account }) {
  const [proposals, setProposals] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProposal, setSelectedProposal] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadProposals()
  }, [])

  const loadProposals = async () => {
    setLoading(true)
    setError(null)

    try {
      // TODO: Load from actual contract
      // For now, use mock data
      const mockProposals = [
        {
          id: 1,
          title: "Proposal #1: Community Treasury Allocation",
          description: "Allocate 10,000 MNT from the treasury for community grants and ecosystem development initiatives.",
          startTime: Math.floor(Date.now() / 1000) - 86400,
          endTime: Math.floor(Date.now() / 1000) + 604800,
          forVotes: 15,
          againstVotes: 3,
          abstainVotes: 5,
          isActive: true
        },
        {
          id: 2,
          title: "Proposal #2: Upgrade Governance Protocol",
          description: "Implement quadratic voting to reduce whale influence and increase community participation.",
          startTime: Math.floor(Date.now() / 1000) - 172800,
          endTime: Math.floor(Date.now() / 1000) + 432000,
          forVotes: 28,
          againstVotes: 7,
          abstainVotes: 2,
          isActive: true
        }
      ]

      setProposals(mockProposals)
    } catch (err) {
      console.error('Error loading proposals:', err)
      setError('Failed to load proposals')
    } finally {
      setLoading(false)
    }
  }

  const handleVote = (proposalId) => {
    // Reload proposals after voting
    loadProposals()
    setSelectedProposal(null)
  }

  const formatTimeRemaining = (endTime) => {
    const now = Math.floor(Date.now() / 1000)
    const remaining = endTime - now

    if (remaining <= 0) return 'Ended'

    const days = Math.floor(remaining / 86400)
    const hours = Math.floor((remaining % 86400) / 3600)

    if (days > 0) return `${days}d ${hours}h remaining`
    return `${hours}h remaining`
  }

  const calculatePercentage = (votes, total) => {
    if (total === 0) return 0
    return Math.round((votes / total) * 100)
  }

  return (
    <div className="proposal-list">
      <div className="section-header">
        <h2>Active Proposals</h2>
        <button className="btn btn-secondary" onClick={loadProposals}>
          Refresh
        </button>
      </div>

      {loading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading proposals...</p>
        </div>
      ) : error ? (
        <div className="error-state">
          <p>{error}</p>
          <button className="btn btn-primary" onClick={loadProposals}>
            Retry
          </button>
        </div>
      ) : proposals.length === 0 ? (
        <div className="empty-state">
          <h3>No Active Proposals</h3>
          <p>Check back later for new governance proposals.</p>
        </div>
      ) : (
        <div className="proposals-grid">
          {proposals.map((proposal) => {
            const totalVotes = proposal.forVotes + proposal.againstVotes + proposal.abstainVotes

            return (
              <div key={proposal.id} className="proposal-card">
                <div className="proposal-header">
                  <div className="proposal-info">
                    <h3>{proposal.title}</h3>
                    <span className={`badge ${proposal.isActive ? 'badge-success' : ''}`}>
                      {proposal.isActive ? 'Active' : 'Ended'}
                    </span>
                  </div>
                  <p className="proposal-time">
                    {formatTimeRemaining(proposal.endTime)}
                  </p>
                </div>

                <p className="proposal-description">
                  {proposal.description}
                </p>

                <div className="proposal-votes">
                  <div className="vote-bar">
                    <div className="vote-section for">
                      <div className="vote-header">
                        <span>For</span>
                        <span className="vote-count">{proposal.forVotes}</span>
                      </div>
                      <div className="bar-container">
                        <div
                          className="bar-fill for"
                          style={{ width: `${calculatePercentage(proposal.forVotes, totalVotes)}%` }}
                        ></div>
                      </div>
                      <span className="vote-percentage">
                        {calculatePercentage(proposal.forVotes, totalVotes)}%
                      </span>
                    </div>

                    <div className="vote-section against">
                      <div className="vote-header">
                        <span>Against</span>
                        <span className="vote-count">{proposal.againstVotes}</span>
                      </div>
                      <div className="bar-container">
                        <div
                          className="bar-fill against"
                          style={{ width: `${calculatePercentage(proposal.againstVotes, totalVotes)}%` }}
                        ></div>
                      </div>
                      <span className="vote-percentage">
                        {calculatePercentage(proposal.againstVotes, totalVotes)}%
                      </span>
                    </div>

                    <div className="vote-section abstain">
                      <div className="vote-header">
                        <span>Abstain</span>
                        <span className="vote-count">{proposal.abstainVotes}</span>
                      </div>
                      <div className="bar-container">
                        <div
                          className="bar-fill abstain"
                          style={{ width: `${calculatePercentage(proposal.abstainVotes, totalVotes)}%` }}
                        ></div>
                      </div>
                      <span className="vote-percentage">
                        {calculatePercentage(proposal.abstainVotes, totalVotes)}%
                      </span>
                    </div>
                  </div>

                  <div className="total-votes">
                    Total Votes: {totalVotes}
                  </div>
                </div>

                {proposal.isActive && (
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedProposal(proposal)}
                  >
                    Vote Anonymously
                  </button>
                )}
              </div>
            )
          })}
        </div>
      )}

      {selectedProposal && (
        <VotePanel
          proposal={selectedProposal}
          account={account}
          onClose={() => setSelectedProposal(null)}
          onVote={handleVote}
        />
      )}
    </div>
  )
}

export default ProposalList
