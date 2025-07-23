'use client'
import React, { useRef } from 'react'

interface Category {
  name: string
  icon: string
}

const categories: Category[] = [
  { name: 'Bank', icon: '🏦' },
  { name: 'Travel Insurance', icon: '✈️' },
  { name: 'Car Dealer', icon: '🚗' },
  { name: 'Furniture Store', icon: '🛋️' },
  { name: 'Jewelry Store', icon: '💎' },
  { name: 'Clothing Store', icon: '👕' },
  { name: 'Electronics & Tech', icon: '💻' },
  { name: 'Fitness & Nutrition', icon: '🏋️' },
  { name: 'Pet Care', icon: '🐶' },
  { name: 'Book Store', icon: '📚' },
]

export default function CategoryBar() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' })
  }

  return (
    <section style={{ marginBottom: '48px' }}>
      {/* Top Header */}
      <div style={topRow}>
        <h2 style={{ fontSize: '20px', margin: 0 }}>What are you looking for?</h2>
        <button style={viewAllButton} onClick={() => window.location.href = '/categories'}>
          See more
        </button>
      </div>

      {/* Scrollable Area with Arrows */}
      <div style={scrollWrapper}>
        <button onClick={scrollLeft} style={arrowButton}>◀</button>

        <div ref={scrollRef} style={scrollContainerStyle}>
          {categories.map((cat) => (
            <div key={cat.name} style={itemStyle}>
              <div style={iconStyle}>{cat.icon}</div>
              <div style={{ fontSize: '14px', marginTop: '4px' }}>{cat.name}</div>
            </div>
          ))}
        </div>

        <button onClick={scrollRight} style={arrowButton}>▶</button>
      </div>
    </section>
  )
}

const topRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px',
}

const scrollWrapper: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  overflow: 'hidden',
}

const scrollContainerStyle: React.CSSProperties = {
  display: 'flex',
  overflowX: 'hidden',
  gap: '16px',
  scrollBehavior: 'smooth',
  flexGrow: 1,
}

const arrowButton: React.CSSProperties = {
  backgroundColor: '#111',
  color: '#fff',
  border: '1px solid #333',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  fontSize: '16px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const viewAllButton: React.CSSProperties = {
  fontSize: '14px',
  color: '#87e64c',
  background: 'transparent',
  border: '1px solid #87e64c',
  padding: '6px 12px',
  borderRadius: '8px',
  cursor: 'pointer',
}

const itemStyle: React.CSSProperties = {
  flex: '0 0 auto',
  textAlign: 'center',
  color: 'white',
  padding: '12px',
  borderRadius: '12px',
  backgroundColor: '#191919',
  minWidth: '100px',
  border: '1px solid #444',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
}

const iconStyle: React.CSSProperties = {
  fontSize: '26px',
}
