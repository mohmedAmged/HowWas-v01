'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'My Echoes', href: '/dashboard/user' },
  { name: 'Perks Received', href: '/dashboard/user/perks' },
  { name: 'Suggestions Made', href: '/dashboard/user/suggestions' },
  { name: 'Profile Settings', href: '/dashboard/user/settings' },

]

export default function UserDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0e0e0e', color: 'white' }}>
      {/* Sidebar */}
      <aside style={{ width: '220px', backgroundColor: '#191919', padding: '20px', borderRight: '1px solid #333' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '24px', fontWeight: 'bold' }}>🙋 My Dashboard</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: pathname === link.href ? '#87e64c' : '#ddd',
                fontWeight: pathname === link.href ? 'bold' : 'normal',
                textDecoration: 'none',
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div style={{ flex: 1, padding: '32px' }}>{children}</div>
    </div>
  )
}
