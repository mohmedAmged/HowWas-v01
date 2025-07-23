'use client'

import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

let chartInstance: Chart | null = null

export default function StatsPage() {
  const chartRef = useRef<HTMLCanvasElement | null>(null)

  const echoStats = {
    handshake: 34,
    loved: 145,
    adored: 52,
    obsessed: 23,
    broken: 7,
  }

  useEffect(() => {
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    // 🧼 Destroy existing chart instance before re-creating
    if (chartInstance) {
      chartInstance.destroy()
    }

    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['🤝 Handshake', '❤️ Loved', '💜 Adored', '🔥 Obsessed', '💔 Broken'],
        datasets: [
          {
            label: 'Echo Counts',
            data: [
              echoStats.handshake,
              echoStats.loved,
              echoStats.adored,
              echoStats.obsessed,
              echoStats.broken,
            ],
            backgroundColor: [
              '#4ade80',
              '#f472b6',
              '#c084fc',
              '#f97316',
              '#ef4444',
            ],
            borderRadius: 8,
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            ticks: { color: '#ccc' },
            grid: { color: '#333' },
          },
          x: {
            ticks: { color: '#ccc' },
            grid: { display: false },
          },
        },
      },
    })

    // Cleanup on unmount
    return () => {
      chartInstance?.destroy()
    }
  }, [chartRef])

  return (
    <div>
      <h1 style={{ fontSize: '24px', marginBottom: '24px' }}>📊 Echo Stats</h1>
      <canvas ref={chartRef} width={600} height={300} />
    </div>
  )
}
