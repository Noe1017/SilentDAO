import { useState } from 'react'
import './CreateProposal.css'

function CreateProposal({ account }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '7'
  })
  const [isCreating, setIsCreating] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.title.trim() || !formData.description.trim()) {
      setError('Please fill in all fields')
      return
    }

    setIsCreating(true)
    setError(null)

    try {
      // TODO: Implement actual proposal creation
      // Call contract's createProposal function

      console.log('Creating proposal:', formData)

      // Simulate creation delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      setSuccess(true)
      setFormData({ title: '', description: '', duration: '7' })

      setTimeout(() => {
        setSuccess(false)
      }, 5000)

    } catch (err) {
      console.error('Error creating proposal:', err)
      setError(err.message || 'Failed to create proposal')
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <div className="create-proposal">
      <div className="create-header">
        <h2>Create Proposal</h2>
        <p className="create-description">
          Create a new governance proposal for the community to vote on.
        </p>
      </div>

      {success && (
        <div className="success-message">
          <p>✓ Proposal created successfully!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="proposal-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter proposal title"
            className="input"
            disabled={isCreating}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your proposal in detail"
            className="input textarea"
            disabled={isCreating}
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Voting Duration</label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="input"
            disabled={isCreating}
          >
            <option value="1">1 Day</option>
            <option value="3">3 Days</option>
            <option value="7">7 Days</option>
            <option value="14">14 Days</option>
            <option value="30">30 Days</option>
          </select>
        </div>

        {error && (
          <div className="form-error">
            {error}
          </div>
        )}

        <div className="form-actions">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isCreating}
          >
            {isCreating ? (
              <>
                <div className="spinner"></div>
                Creating...
              </>
            ) : (
              'Create Proposal'
            )}
          </button>
        </div>

        <div className="form-info">
          <p className="info-title">Before creating a proposal:</p>
          <ul className="info-list">
            <li>Make sure your title is clear and concise</li>
            <li>Provide a detailed description of what you're proposing</li>
            <li>Choose an appropriate voting duration</li>
            <li>Proposal cannot be modified once created</li>
          </ul>
        </div>
      </form>
    </div>
  )
}

export default CreateProposal
