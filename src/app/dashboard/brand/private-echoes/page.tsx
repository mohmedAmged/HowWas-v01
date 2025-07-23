'use client'

import { useState } from 'react'

const initialEchoes = [
  {
    id: 1,
    user: 'Tariq H.',
    submittedAt: '2025-06-12T10:00:00Z',
    echo: '💔 Broken Echo',
    message: 'My order was wrong and nobody replied to my messages.',
    status: 'pending',
  },
  {
    id: 2,
    user: 'Lina M.',
    submittedAt: '2025-06-14T15:30:00Z',
    echo: '❤️ Loved Echo',
    message: 'Fantastic customer service, fast and delicious!',
    status: 'pending',
  },
]

export default function PrivateEchoesPage() {
  const [echoes, setEchoes] = useState(initialEchoes)

  const handleAction = (id: number, action: 'admit' | 'deny' | 'extend') => {
    const updated = echoes.map((echo) =>
      echo.id === id ? { ...echo, status: action } : echo
    )
    setEchoes(updated)
  }

  return (
    <div>
      <h1 style={{ fontSize: '24px', marginBottom: '24px' }}>📥 Private Echoes</h1>

      {echoes.map((echo) => (
        <div
          key={echo.id}
          style={{
            backgroundColor: '#191919',
            border: '1px solid #333',
            padding: '16px',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        >
          <div style={{ fontSize: '14px', color: '#999' }}>
            {new Date(echo.submittedAt).toLocaleDateString()} by {echo.user}
          </div>
          <div style={{ margin: '8px 0', fontSize: '18px' }}>{echo.echo}</div>
          <p style={{ color: '#ccc', marginBottom: '12px' }}>{echo.message}</p>

          {echo.status === 'pending' ? (
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => handleAction(echo.id, 'admit')} style={btnStyleAdmit}>
                ✅ Admit Issue
              </button>
              <button onClick={() => handleAction(echo.id, 'deny')} style={btnStyleDeny}>
                ❌ Deny
              </button>
              <button onClick={() => handleAction(echo.id, 'extend')} style={btnStyleExtend}>
                ⏳ Request 7 Days
              </button>
            </div>
          ) : (
            <div style={{ color: '#87e64c', fontWeight: 'bold' }}>
              Status: {echo.status.toUpperCase()}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// Button styles
const baseButton: React.CSSProperties = {
  padding: '8px 14px',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer',
  border: 'none',
}

const btnStyleAdmit: React.CSSProperties = {
  ...baseButton,
  backgroundColor: '#87e64c',
  color: 'black',
}

const btnStyleDeny: React.CSSProperties = {
  ...baseButton,
  backgroundColor: '#ef4444',
  color: 'white',
}

const btnStyleExtend: React.CSSProperties = {
  ...baseButton,
  backgroundColor: '#f59e0b',
  color: 'black',
}
