'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
  { label: '📥 Private Echoes', href: '/dashboard/brand/private-echoes' },
  { label: '📝 Public Reviews', href: '/dashboard/brand/public-reviews' },
  { label: '📊 Echo Stats', href: '/dashboard/brand/stats' },
  { label: '🎁 Perks', href: '/dashboard/brand/perks' },
  { label: '⚙️ Settings', href: '/dashboard/brand/settings' },
  {label: '⚙️ Branches', href: '/dashboard/brand/branches' },
  { label: '⚙️ Items', href: '/dashboard/brand/items' },
]

export default function BrandDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0e0e0e', color: 'white' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: '240px',
          backgroundColor: '#191919',
          padding: '24px 16px',
          borderRight: '1px solid #222',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <h2 style={{ fontSize: '20px', marginBottom: '24px', color: '#87e64c' }}>🏢 Brand Dashboard</h2>

        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: pathname === item.href ? '#87e64c' : 'transparent',
              color: pathname === item.href ? '#000' : '#ccc',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            {item.label}
          </Link>
        ))}
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: '32px' }}>
        {children}
      </main>
    </div>
  )
}
