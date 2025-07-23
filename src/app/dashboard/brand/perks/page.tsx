'use client'

import { useState } from 'react'

interface Perk {
  title: string
  description: string
  createdAt: string
}

export default function BrandPerksPage() {
  const [perks, setPerks] = useState<Perk[]>([
    {
      title: 'Free Dessert 🍨',
      description: 'Valid for ❤️ Loved Echo reviewers',
      createdAt: '2025-06-10',
    },
    {
      title: '10% Off Coupon 🔖',
      description: 'Sent to 12 reviewers who received 🤝 Handshake',
      createdAt: '2025-06-12',
    },
  ])

  const [form, setForm] = useState({ title: '', description: '' })

  const handleAddPerk = () => {
    if (!form.title.trim()) return
    const newPerk: Perk = {
      title: form.title,
      description: form.description,
      createdAt: new Date().toISOString().split('T')[0],
    }
    setPerks([newPerk, ...perks])
    setForm({ title: '', description: '' })
  }

  return (
    <div style={{ padding: '32px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>🎁 Perks Management</h1>

      {/* Add New Perk */}
      <div style={{ marginBottom: '32px' }}>
        <input
          type="text"
          placeholder="Perk Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          style={inputStyle}
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          style={{ ...inputStyle, height: '60px', marginTop: '10px' }}
        />
        <button onClick={handleAddPerk} style={buttonStyle}>
          ➕ Add Perk
        </button>
      </div>

      {/* Perk List */}
      <div>
        {perks.map((perk, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#191919',
              border: '1px solid #333',
              borderRadius: '10px',
              padding: '16px',
              marginBottom: '16px',
            }}
          >
            <h3 style={{ margin: '0 0 6px' }}>{perk.title}</h3>
            <p style={{ color: '#ccc', marginBottom: '6px' }}>{perk.description}</p>
            <p style={{ fontSize: '13px', color: '#888' }}>Created: {perk.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  padding: '10px',
  width: '100%',
  borderRadius: '8px',
  backgroundColor: '#111',
  border: '1px solid #333',
  color: 'white',
}

const buttonStyle: React.CSSProperties = {
  marginTop: '12px',
  padding: '10px 16px',
  backgroundColor: '#87e64c',
  color: 'black',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
  border: 'none',
}
