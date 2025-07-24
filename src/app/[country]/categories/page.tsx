'use client'

import Link from 'next/link'

const categoryGroups = [
  {
    label: 'Motors',
    slug: 'motors',
    subcategories: ['Cars', 'Rental Cars', 'New Cars', 'Export Cars'],
  },
  {
    label: 'Jobs',
    slug: 'jobs',
    subcategories: ['Accounting / Finance', 'Engineering', 'Sales / Business Development', 'Secretarial / Front Office'],
  },
  {
    label: 'Community',
    slug: 'community',
    subcategories: ['Freelancers', 'Home Maintenance', 'Tutors & Classes'],
  },
]

export default function CategoriesPage() {
  return (
    <main style={mainStyle}>
      <h1 style={titleStyle}>Explore Categories</h1>

      <div style={gridStyle}>
        {categoryGroups.map((group) => (
          <div key={group.slug} style={cardStyle}>
            <h3 style={cardTitle}>
               {group.label}
            </h3>

            <ul style={subListStyle}>
              {group.subcategories.map((sub, i) => (
                <li key={i}>
                  <Link
                    href={`/brands?category=${group.slug}&sub=${encodeURIComponent(sub)}`}
                    style={subLinkStyle}
                  >
                    {sub}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={`/brands?category=${group.slug}`}
              style={seeAllStyle}
            >
              All in {group.label} →
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

/* === Styles === */

const mainStyle: React.CSSProperties = {
  backgroundColor: '#0f0f0f',
  color: 'white',
  padding: '48px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
  fontFamily: 'Inter, sans-serif',
}

const titleStyle: React.CSSProperties = {
  fontSize: '32px',
  fontWeight: 700,
  marginBottom: '36px',
  color: '#fff',
  textAlign: 'center',
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '32px',
}

const cardStyle: React.CSSProperties = {
  backgroundColor: '#191919',
  border: '1px solid #2e2e2e',
  borderRadius: '16px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '16px',
}

const cardTitle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 600,
  color: '#87e64c',
  marginBottom: '4px',
}

const subListStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

const subLinkStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#eee',
  textDecoration: 'none',
  transition: 'color 0.2s',
}

const seeAllStyle: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: 600,
  color: '#87e64c',
  textDecoration: 'none',
  marginTop: '8px',
}
