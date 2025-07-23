'use client'

export default function UserDashboardHome() {
  const user = {
    name: 'Zaid',
    echoesGiven: 6,
    perksReceived: 2,
    wisdomPoints: 1,
  }

  const recent = [
    { brand: 'BurgerCraft', type: '❤️ Loved', date: '2025-06-14' },
    { brand: 'TechFix', type: '💔 Broken', date: '2025-06-08' },
  ]

  return (
    <div>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>👋 Welcome, {user.name}</h1>

      {/* Stats Summary */}
      <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
        <StatCard label="Total Echoes" value={user.echoesGiven} icon="📣" />
        <StatCard label="Perks Received" value={user.perksReceived} icon="🎁" />
        <StatCard label="Wisdom Points" value={user.wisdomPoints} icon="🧠" />
      </div>

      {/* Recent Activity */}
      <div>
        <h2 style={{ fontSize: '18px', marginBottom: '12px' }}>📝 Recent Echoes</h2>
        {recent.length === 0 ? (
          <p style={{ color: '#aaa' }}>You haven’t submitted any reviews yet.</p>
        ) : (
          <ul>
            {recent.map((e, i) => (
              <li key={i} style={{ marginBottom: '10px' }}>
                {e.type} for <strong>{e.brand}</strong> – <span style={{ color: '#888' }}>{e.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function StatCard({ label, value, icon }: { label: string; value: number; icon: string }) {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#191919',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #333',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '28px', marginBottom: '8px' }}>{icon}</div>
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{value}</div>
      <div style={{ color: '#aaa', fontSize: '14px' }}>{label}</div>
    </div>
  )
}
