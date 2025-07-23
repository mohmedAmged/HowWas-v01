'use client'

export default function SuggestionsPage() {
  const suggestions = [
    {
      idea: 'Add a kids’ combo with smaller burger and juice.',
      brand: 'BurgerCraft',
      status: 'endorsed',
      date: '2025-06-10',
    },
    {
      idea: 'Offer weekend yoga sessions.',
      brand: 'Glow Gym',
      status: 'pending',
      date: '2025-06-12',
    },
  ]

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'endorsed':
        return '🧠 Marked Wise'
      case 'pending':
        return '⏳ Waiting'
      case 'rejected':
        return '❌ Not Accepted'
      default:
        return ''
    }
  }

  return (
    <div>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>💡 Your Suggestions</h1>

      {suggestions.length === 0 ? (
        <p style={{ color: '#aaa' }}>You haven’t submitted any suggestions yet.</p>
      ) : (
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {suggestions.map((s, i) => (
            <li
              key={i}
              style={{
                backgroundColor: '#191919',
                padding: '16px',
                border: '1px solid #333',
                borderRadius: '12px',
              }}
            >
              <div style={{ fontSize: '16px', marginBottom: '6px' }}>{s.idea}</div>
              <div style={{ fontSize: '14px', color: '#ccc' }}>
                Brand: <strong>{s.brand}</strong> • {getStatusLabel(s.status)}
              </div>
              <div style={{ fontSize: '12px', color: '#777', marginTop: '4px' }}>
                {s.date}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
