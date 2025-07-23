'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

interface Item {
  id: number
  name: string
  category: string
  availability: 'available' | 'unavailable' | 'coming soon'
}

const mockItems: Item[] = [
  { id: 1, name: 'Signature Beef Burger', category: 'Burgers', availability: 'available' },
  { id: 2, name: 'Grilled Chicken Wrap', category: 'Wraps', availability: 'coming soon' },
  { id: 3, name: 'Loaded Fries', category: 'Sides', availability: 'unavailable' },
]

export default function ItemsDashboard() {
  const router = useRouter()

  return (
    <main style={{ padding: '32px', color: 'white', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600 }}>🍔 Items</h1>
        <button
          onClick={() => router.push('/dashboard/brand/items/new')}
          style={{
            backgroundColor: '#87e64c',
            color: '#000',
            padding: '10px 18px',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          ➕ Add Item
        </button>
      </div>

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: '#191919',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <thead style={{ backgroundColor: '#2c2c2c', textAlign: 'left' }}>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Availability</th>
          </tr>
        </thead>
        <tbody>
          {mockItems.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #333' }}>
              <td style={tdStyle}>{item.name}</td>
              <td style={tdStyle}>{item.category}</td>
              <td style={tdStyle}>
                <span style={availabilityTag(item.availability)}>{item.availability}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

const thStyle: React.CSSProperties = {
  padding: '12px 16px',
  color: '#ccc',
  fontSize: '14px',
}

const tdStyle: React.CSSProperties = {
  padding: '12px 16px',
  fontSize: '14px',
  color: '#eee',
}

const availabilityTag = (status: Item['availability']): React.CSSProperties => {
  const baseStyle: React.CSSProperties = {
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '13px',
    textTransform: 'capitalize',
    display: 'inline-block',
    fontWeight: 500,
  }

  switch (status) {
    case 'available':
      return { ...baseStyle, backgroundColor: '#10b981', color: '#000' }
    case 'unavailable':
      return { ...baseStyle, backgroundColor: '#ef4444', color: '#fff' }
    case 'coming soon':
      return { ...baseStyle, backgroundColor: '#facc15', color: '#000' }
    default:
      return baseStyle
  }
}
