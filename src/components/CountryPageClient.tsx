'use client'

import { useState } from 'react'
// import Header from '@/components/Header'
import BrandCard from '@/components/BrandCard'
import ReviewCard from '@/components/ReviewCard'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import MyNavbar from './MyNavbar'

interface CountryPageClientProps {
  country: string
}

const citiesByCountry: Record<string, string[]> = {
  jordan: ['Amman', 'Irbid', 'Zarqa'],
  uae: ['Dubai', 'Abu Dhabi', 'Sharjah'],
  usa: ['New York', 'Los Angeles', 'Houston'],
}

const sampleBrands = [
  {
    name: 'BurgerCraft',
    city: 'Amman',
    category: 'Food',
    logoUrl: '/logos/burgercraft.png',
    description: 'Hand-crafted burgers made fresh daily with love.',
    echoes: { handshake: 12, loved: 8, adored: 5, broken: 1 },
  },
  {
    name: 'Glow Gym',
    city: 'Amman',
    category: 'Fitness',
    logoUrl: '/logos/glowgym.png',
    description: 'Your 24/7 fitness destination for all energy levels.',
    echoes: { handshake: 9, loved: 14, adored: 3, broken: 0 },
  },
  {
    name: 'TechFix',
    city: 'Amman',
    category: 'Electronics',
    logoUrl: '/logos/techfix.png',
    description: 'Trusted repair service for mobiles and laptops.',
    echoes: { handshake: 18, loved: 10, adored: 6, broken: 2 },
  },
]

const sampleReviews = [
  {
    reviewerName: 'Christopher DiChiara',
    reviewerImage: '/avatars/chris.jpg',
    echoTag: '💔',
    echoLabel: 'Had a problem',
    reviewText: 'Hello, my name is Christopher DiChiara. I worked at Express Oil Change for 2 years...',
    businessName: 'Express Oil Change & Tire Engineers',
    businessLogo: '/logos/expressoil.png',
    businessDomain: 'expressoil.com',
    isVerified: true,
    item: 'Oil Change Service',
  },
  {
    reviewerName: 'Jane Doe',
    reviewerImage: '/avatars/jane.jpg',
    echoTag: '🤝',
    echoLabel: 'Respectful',
    reviewText: 'The team was respectful and quick, but I wish they explained more.',
    businessName: 'Fast Wheels Garage',
    isVerified: false,
  },
]

const topCategories = ['All', 'Food', 'Fitness', 'Electronics', 'Clothing', 'Travel']

export default function CountryPageClient({ country }: CountryPageClientProps) {
  const [search, setSearch] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(0)

  const REVIEWS_PER_PAGE = 4
  const start = currentPage * REVIEWS_PER_PAGE
  const paginatedReviews = sampleReviews.slice(start, start + REVIEWS_PER_PAGE)

  const countryCapitalized = country.charAt(0).toUpperCase() + country.slice(1)
  const cityOptions = citiesByCountry[country.toLowerCase()] || []

  const handleSearch = () => {
    if (search.trim()) alert(`Searching for "${search}"...`)
  }

  const filteredBrands = sampleBrands.filter((brand) => {
    const cityMatch = selectedCity ? brand.city === selectedCity : true
    const categoryMatch = selectedCategory === 'All' || brand.category === selectedCategory
    return cityMatch && categoryMatch
  })

  return (
    <>
      <MyNavbar />
      <main style={{ backgroundColor: '#0f0f0f', color: 'white', padding: '48px 24px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
        <section style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '12px' }}>Explore Trust in {countryCapitalized}</h1>
          <p style={{ color: '#bbb', fontSize: '16px', marginBottom: '28px' }}>
            Search for trustworthy brands and the latest reviews in your region.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Search by brand or product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '420px',
                padding: '14px 18px',
                borderRadius: '10px',
                border: '1px solid #333',
                backgroundColor: '#191919',
                color: 'white',
                fontSize: '16px',
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                padding: '14px 24px',
                backgroundColor: '#87e64c',
                border: 'none',
                borderRadius: '8px',
                color: 'black',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Search
            </button>
          </div>
          {cityOptions.length > 0 && (
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <label htmlFor="city-select" style={{ fontSize: '14px', color: '#ccc', fontWeight: 500 }}>
                Filter by city
              </label>
              <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
                <select
                  id="city-select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  style={{
                    width: '100%',
                    appearance: 'none',
                    padding: '14px 18px',
                    borderRadius: '10px',
                    backgroundColor: '#191919',
                    color: '#fff',
                    border: '1px solid #333',
                    fontSize: '16px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  <option value="">-- Choose City --</option>
                  {cityOptions.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <span style={{
                  position: 'absolute',
                  top: '50%',
                  right: '14px',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  fontSize: '14px',
                  color: '#999',
                }}>⌄</span>
              </div>
            </div>
          )}
        </section>

        {/* Category Filter */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {topCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '10px 18px',
                borderRadius: '8px',
                backgroundColor: selectedCategory === cat ? '#87e64c' : '#191919',
                border: '1px solid #333',
                color: selectedCategory === cat ? 'black' : '#ccc',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brand Cards */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {filteredBrands.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </div>

        {/* Reviews Section */}
        <section style={{ marginTop: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 600 }}>Latest Reviews</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button title='Previous' onClick={() => setCurrentPage((p) => Math.max(0, p - 1))} disabled={currentPage === 0}>
                <FiArrowLeft size={24} style={{ color: '#999' }} />
              </button>
              <button
                title='Next'
                onClick={() => setCurrentPage((p) => (p < Math.ceil(sampleReviews.length / REVIEWS_PER_PAGE) - 1 ? p + 1 : p))}
                disabled={start + REVIEWS_PER_PAGE >= sampleReviews.length}
              >
                <FiArrowRight size={24} />
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {paginatedReviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
