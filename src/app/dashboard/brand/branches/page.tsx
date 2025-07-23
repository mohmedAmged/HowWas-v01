'use client'

import React from 'react'

interface Branch {
  id: number
  name: string
  location: string
  contact: string
  status: 'active' | 'pending' | 'inactive'
}

const mockBranches: Branch[] = [
  {
    id: 1,
    name: 'BurgerCraft - Abdoun',
    location: 'Abdoun, Amman',
    contact: '+962 7 9123 4567',
    status: 'active',
  },
  {
    id: 2,
    name: 'BurgerCraft - Khalda',
    location: 'Khalda, Amman',
    contact: '+962 7 9234 5678',
    status: 'pending',
  },
  {
    id: 3,
    name: 'BurgerCraft - Sweifieh',
    location: 'Sweifieh, Amman',
    contact: '+962 7 9345 6789',
    status: 'inactive',
  },
]

export default function BranchesDashboard() {
  return (
    <main style={{ padding: '24px', color: 'white' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>🏢 Branches</h1>

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
            <th style={thStyle}>Location</th>
            <th style={thStyle}>Contact</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {mockBranches.map((branch) => (
            <tr key={branch.id} style={{ borderBottom: '1px solid #333' }}>
              <td style={tdStyle}>{branch.name}</td>
              <td style={tdStyle}>{branch.location}</td>
              <td style={tdStyle}>{branch.contact}</td>
              <td style={tdStyle}>
                <span style={statusTag(branch.status)}>{branch.status}</span>
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

const statusTag = (status: Branch['status']): React.CSSProperties => {
  const baseStyle: React.CSSProperties = {
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '13px',
    textTransform: 'capitalize',
    display: 'inline-block',
  }

  switch (status) {
    case 'active':
      return { ...baseStyle, backgroundColor: '#10b981', color: '#000' }
    case 'pending':
      return { ...baseStyle, backgroundColor: '#facc15', color: '#000' }
    case 'inactive':
      return { ...baseStyle, backgroundColor: '#ef4444', color: '#fff' }
    default:
      return baseStyle
  }
}
