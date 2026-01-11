import { useState } from 'react'
import './WalletConnect.css'

function WalletConnect({ account, onConnect, onDisconnect }) {
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState(null)

  const connectWallet = async () => {
    console.log('🔷 Connect wallet button clicked')
    setIsConnecting(true)
    setError(null)

    try {
      console.log('🔷 Checking if MetaMask is installed...')
      console.log('window.ethereum:', window.ethereum)

      // Check if MetaMask is installed
      if (!window.ethereum) {
        console.error('❌ MetaMask not found')
        throw new Error('MetaMask not found. Please install MetaMask.')
      }
      console.log('✅ MetaMask detected')

      // Request account access
      console.log('🔷 Requesting account access...')
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      console.log('✅ Accounts received:', accounts)

      if (accounts.length === 0) {
        throw new Error('No accounts found. Please connect your wallet.')
      }

      // Switch to Mantle Sepolia Testnet
      console.log('🔷 Switching to Mantle Sepolia Testnet...')
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x138B' }] // 5003 in hex
        })
        console.log('✅ Switched to Mantle Sepolia')
      } catch (switchError) {
        console.log('⚠️ Switch error:', switchError)
        // This error code indicates that the chain has not been added to MetaMask
        if (switchError.code === 4902) {
          console.log('🔷 Adding Mantle Sepolia network...')
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x138B',
              chainName: 'Mantle Sepolia Testnet',
              nativeCurrency: {
                name: 'Mantle',
                symbol: 'MNT',
                decimals: 18
              },
              rpcUrls: ['https://rpc.sepolia.mantle.xyz'],
              blockExplorerUrls: ['https://sepolia.mantle.xyz']
            }]
          })
          console.log('✅ Mantle Sepolia added')
        } else {
          throw switchError
        }
      }

      // Get the connected address
      const address = accounts[0]
      console.log('✅ Connected successfully:', address)
      onConnect(address)

    } catch (err) {
      console.error('❌ Error connecting wallet:', err)
      setError(err.message || 'Failed to connect wallet')
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    onDisconnect()
  }

  const formatAddress = (address) => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <div className="wallet-connect">
      {account ? (
        <div className="wallet-connected">
          <div className="wallet-info">
            <span className="wallet-indicator"></span>
            <span className="wallet-address">{formatAddress(account)}</span>
          </div>
          <button
            className="btn btn-secondary"
            onClick={disconnectWallet}
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          className="btn btn-primary"
          onClick={connectWallet}
          disabled={isConnecting}
        >
          {isConnecting ? (
            <>
              <div className="spinner"></div>
              Connecting...
            </>
          ) : (
            'Connect Wallet'
          )}
        </button>
      )}

      {error && (
        <div className="wallet-error">
          {error}
        </div>
      )}
    </div>
  )
}

export default WalletConnect
