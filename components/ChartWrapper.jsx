import { useState } from 'react'
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
    } from 'chart.js'
    
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    )
    
    export default function ChartWrapper({ data, options }) {
      const [isZoomed, setIsZoomed] = useState(false)
    
      const enhancedOptions = {
        ...options,
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14
              },
              color: '#374151'
            }
          },
          tooltip: {
            enabled: true,
            backgroundColor: '#1e40af',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            padding: 12,
            cornerRadius: 4,
            displayColors: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#6b7280',
              font: {
                size: 12
              }
            }
          },
          y: {
            grid: {
              color: '#e5e7eb'
            },
            ticks: {
              color: '#6b7280',
              font: {
                size: 12
              }
            }
          }
        },
        animation: {
          duration: 300
        },
        onHover: (event, chartElement) => {
          event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default'
        }
      }
    
      return (
        <div className={`relative ${isZoomed ? 'fixed inset-0 z-50 bg-white p-8' : ''}`}>
          <Line 
            data={data}
            options={enhancedOptions}
            height={isZoomed ? '100%' : 400}
          />
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute top-2 right-2 bg-white p-2 rounded-lg shadow-md hover:bg-gray-50"
            aria-label={isZoomed ? 'Minimize chart' : 'Maximize chart'}
          >
            {isZoomed ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            )}
          </button>
        </div>
      )
    }
