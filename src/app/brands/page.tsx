'use client'

import { useState, useMemo } from 'react'
import RedesignedBrandCard from '@/components/BrandCard'
// import Header from '@/components/Header'  // ✅ import the header
import MyNavbar from '@/components/MyNavbar'

const sampleBrands = [
  {
    name: 'BurgerCraft',
    description: 'Hand-crafted burgers made fresh daily with love.',
    logoUrl: '/logos/burgercraft.png',
    city: 'Amman',
    country: 'Jordan',
    category: 'Food',
    echoes: { handshake: 12, loved: 8, adored: 5, broken: 1 },
  },
  {
    name: 'Glow Gym',
    description: 'Your 24/7 fitness destination for all energy levels.',
    logoUrl: '/logos/glowgym.png',
    city: 'Amman',
    country: 'Jordan',
    category: 'Fitness',
    echoes: { handshake: 9, loved: 14, adored: 3, broken: 0 },
  },
  {
    name: 'TechFix',
    description: 'Trusted repair service for mobiles and laptops.',
    logoUrl: '/logos/techfix.png',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    category: 'Electronics',
    echoes: { handshake: 18, loved: 10, adored: 6, broken: 2 },
  },
]

export default function AllBrandsPage() {
  const [query, setQuery] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [category, setCategory] = useState('')
  const [activeLetter, setActiveLetter] = useState('')

  const countries = [...new Set(sampleBrands.map(b => b.country))]
  const cities = [...new Set(sampleBrands.filter(b => !country || b.country === country).map(b => b.city))]
  const categories = [...new Set(sampleBrands.map(b => b.category))]
  const letters = [...new Set(sampleBrands.map(b => b.name.charAt(0).toUpperCase()))].sort()

  const filteredBrands = useMemo(() => {
    return sampleBrands.filter(b => {
      const matchCountry = country ? b.country === country : true
      const matchCity = city ? b.city === city : true
      const matchCategory = category ? b.category === category : true
      const matchQuery = query ? b.name.toLowerCase().includes(query.toLowerCase()) : true
      const matchLetter = activeLetter ? b.name.startsWith(activeLetter) : true
      return matchCountry && matchCity && matchCategory && matchQuery && matchLetter
    })
  }, [query, country, city, category, activeLetter])

  return (
    <>
      <MyNavbar /> {/* ✅ header is now part of the page */}

      <main style={{ backgroundColor: '#0f0f0f', color: 'white', padding: '48px 24px', minHeight: '100vh' }}>
        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
          <input
            type="text"
            placeholder="Search brand..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={input}
          />
          <select value={country} onChange={e => { setCountry(e.target.value); setCity('') }} style={select}>
            <option value="">All Countries</option>
            {countries.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={city} onChange={e => setCity(e.target.value)} style={select}>
            <option value="">All Cities</option>
            {cities.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={category} onChange={e => setCategory(e.target.value)} style={select}>
            <option value="">All Categories</option>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        {/* Letter Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {letters.map(letter => (
            <button
              key={letter}
              onClick={() => setActiveLetter(letter === activeLetter ? '' : letter)}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                backgroundColor: activeLetter === letter ? '#87e64c' : '#191919',
                border: '1px solid #333',
                color: activeLetter === letter ? 'white' : '#ccc',
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: '14px',
              }}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Brand Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
          {filteredBrands.map(brand => (
            <RedesignedBrandCard key={brand.name} {...brand} />
          ))}
        </div>
      </main>
    </>
  )
}

const input: React.CSSProperties = {
  padding: '10px 14px',
  borderRadius: '8px',
  backgroundColor: '#191919',
  color: 'white',
  border: '1px solid #333',
}

const select: React.CSSProperties = {
  padding: '10px 14px',
  borderRadius: '8px',
  backgroundColor: '#191919',
  color: 'white',
  border: '1px solid #333',
}
