import { useState, useEffect } from 'react'
    
    export default function BitcoinAnalytics() {
      const [metrics, setMetrics] = useState(null)
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)
    
      useEffect(() => {
        const fetchMetrics = async () => {
          try {
            const response = await fetch('/api/bitcoin-metrics')
            if (!response.ok) throw new Error('Failed to fetch metrics')
            const data = await response.json()
            setMetrics(data)
          } catch (err) {
            setError(err.message)
          } finally {
            setLoading(false)
          }
        }
    
        fetchMetrics()
      }, [])
    
      if (loading) return <div>Loading Bitcoin metrics...</div>
      if (error) return <div>Error: {error}</div>
    
      const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0
        }).format(value)
      }
    
      const formatPercentage = (value) => {
        return `${value?.toFixed(2)}%`
      }
    
      const getChangeColor = (value) => {
        return value >= 0 ? 'text-green-600' : 'text-red-600'
      }
    
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Market Cap</h3>
            <p className="text-2xl font-semibold mt-2">
              {formatCurrency(metrics.market_cap)}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">24h Volume</h3>
            <p className="text-2xl font-semibold mt-2">
              {formatCurrency(metrics.total_volume)}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">24h Change</h3>
            <p className={`text-2xl font-semibold mt-2 ${getChangeColor(metrics.price_change_percentage_24h)}`}>
              {formatPercentage(metrics.price_change_percentage_24h)}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">7d Change</h3>
            <p className={`text-2xl font-semibold mt-2 ${getChangeColor(metrics.price_change_percentage_7d)}`}>
              {formatPercentage(metrics.price_change_percentage_7d)}
            </p>
          </div>
        </div>
      )
    }
