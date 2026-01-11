import { useState } from 'react'
import './VotePanel.css'

function VotePanel({ proposal, account, onClose, onVote }) {
  const [selectedChoice, setSelectedChoice] = useState(null)
  const [isVoting, setIsVoting] = useState(false)
  const [error, setError] = useState(null)

  const choices = [
    { value: 1, label: 'For', color: '#00ff9d' },
    { value: 0, label: 'Against', color: '#ff3d00' },
    { value: 2, label: 'Abstain', color: '#a0a0a0' }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (selectedChoice === null) {
      setError('Please select a vote choice')
      return
    }

    setIsVoting(true)
    setError(null)

    try {
      // TODO: Implement actual voting logic
      // 1. Generate Merkle proof for voter
      // 2. Generate nullifier
      // 3. Call contract vote function

      console.log('Voting on proposal', proposal.id, 'with choice', selectedChoice)

      // Simulate voting delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      alert('Vote submitted successfully! (Demo mode)')

      onVote(proposal.id)
    } catch (err) {
      console.error('Error voting:', err)
      setError(err.message || 'Failed to submit vote')
    } finally {
      setIsVoting(false)
    }
  }

  return (
    <div className="vote-panel-overlay" onClick={onClose}>
      <div className="vote-panel" onClick={(e) => e.stopPropagation()}>
        <div className="vote-panel-header">
          <h2>Vote Anonymously</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="vote-panel-content">
          <div className="proposal-summary">
            <h3>{proposal.title}</h3>
            <p>{proposal.description}</p>
          </div>

          <form onSubmit={handleSubmit} className="vote-form">
            <div className="vote-choices">
              <label className="vote-label">Select your vote:</label>
              <div className="choices-grid">
                {choices.map((choice) => (
                  <label key={choice.value} className="choice-option">
                    <input
                      type="radio"
                      name="vote"
                      value={choice.value}
                      checked={selectedChoice === choice.value}
                      onChange={() => setSelectedChoice(choice.value)}
                    />
                    <span
                      className="choice-content"
                      style={{
                        borderColor: selectedChoice === choice.value ? choice.color : 'var(--border)',
                        backgroundColor: selectedChoice === choice.value ? `${choice.color}10` : 'transparent'
                      }}
                    >
                      <span
                        className="choice-radio"
                        style={{
                          backgroundColor: selectedChoice === choice.value ? choice.color : 'transparent',
                          borderColor: choice.color
                        }}
                      ></span>
                      <span className="choice-label" style={{ color: choice.color }}>
                        {choice.label}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {error && (
              <div className="vote-error">
                {error}
              </div>
            )}

            <div className="vote-info">
              <p className="info-text">
                <strong>🔒 Your vote is private</strong>
              </p>
              <p className="info-text">
                Your identity will not be revealed. Only your vote choice will be counted.
              </p>
              <p className="info-text">
                You are voting from: {account?.slice(0, 6)}...{account?.slice(-4)}
              </p>
            </div>

            <div className="vote-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
                disabled={isVoting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isVoting || selectedChoice === null}
              >
                {isVoting ? (
                  <>
                    <div className="spinner"></div>
                    Submitting...
                  </>
                ) : (
                  'Submit Vote'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default VotePanel
