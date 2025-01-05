import { useState, useEffect } from 'react'
    import { Line } from 'react-chartjs-2'
    import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
      Filler
    } from 'chart.js'
    
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
      Filler
    )
    
    export default function BitcoinChart() {
      const [bitcoinData, setBitcoinData] = useState(null)
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/api/bitcoin')
            if (!response.ok) throw new Error('Failed to fetch data')
            const data = await response.json()
            setBitcoinData(data)
          } catch (err) {
            setError(err.message)
          } finally {
            setLoading(false)
          }
        }
    
        fetchData()
      }, [])
    
      if (loading) return <div>Loading Bitcoin data...</div>
      if (error) return <div>Error: {error}</div>
    
      const chartData = {
        labels: bitcoinData.prices.map(price => 
          new Date(price[0]).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
          })
        ),
        datasets: [
          {
            label: 'Bitcoin Price (USD)',
            data: bitcoinData.prices.map(price => price[1]),
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            fill: true,
            pointRadius: 0,
            borderWidth: 2,
            tension: 0.1
          }
        ]
      }
    
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: (context) => {
                const value = context.raw
                return `$${value.toLocaleString()}`
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              maxTicksLimit: 10,
              color: '#6b7280'
            }
          },
          y: {
            grid: {
              color: '#e5e7eb'
            },
            ticks: {
              color: '#6b7280',
              callback: (value) => `$${value.toLocaleString()}`
            }
          }
        },
        interaction: {
          mode: 'index',
          intersect: false
        }
      }
    
      return (
        <div className="h-[400px]">
          <Line data={chartData} options={options} />
        </div>
      )
    }
