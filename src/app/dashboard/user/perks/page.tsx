'use client'

export default function UserPerksPage() {
  const perks = [
    {
      title: 'Free Side Fries 🍟',
      from: 'BurgerCraft',
      reason: 'You gave a ❤️ Loved Echo',
      claimed: true,
      date: '2025-06-14',
    },
    {
      title: '10% Discount Code',
      from: 'Glow Gym',
      reason: 'You received 🤝 Handshake after review',
      claimed: false,
      date: '2025-06-11',
    },
  ]

  return (
    <div>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>🎁 Perks You’ve Received</h1>

      {perks.length === 0 ? (
        <p style={{ color: '#aaa' }}>No perks received yet. Keep echoing your voice!</p>
      ) : (
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {perks.map((perk, i) => (
            <li
              key={i}
              style={{
                backgroundColor: '#191919',
                padding: '16px',
                border: '1px solid #333',
                borderRadius: '12px',
              }}
            >
              <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '6px' }}>
                {perk.title}
              </div>
              <div style={{ color: '#ccc', fontSize: '14px', marginBottom: '6px' }}>
                From: <strong>{perk.from}</strong> • {perk.reason}
              </div>
              <div style={{ fontSize: '13px', color: '#888' }}>
                {perk.claimed ? '✅ Claimed' : '🕓 Not Claimed'} • {perk.date}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
