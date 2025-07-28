'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import Header from '@/components/Header'
import ClientLogoBar from '@/components/ClientLogoBar'
import Link from 'next/link'
import MyNavbar from '@/components/MyNavbar'

export default function MainPage() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/global/${search.toLowerCase().replace(/\s+/g, '-')}`)
    }
  }

  return (
    <>
      <MyNavbar />

      {/* Promo Bar */}
      <div style={promoBarStyle}>
        <span style={promoLabelStyle}>✅ Promo</span>
        <span>
          <strong>Add your brand now</strong> – 50% discount this month!
        </span>
      </div>

      <main style={mainStyle}>
        {/* Hero Section */}
        <section style={heroSectionStyle}>
          <h1 style={heroTitleStyle}>Welcome to Howwaz</h1>
          <p style={heroSubtitleStyle}>
            Discover trustworthy brands. Powered by EchoScore.
          </p>

          <div style={searchContainerStyle}>
            <input
              type="text"
              placeholder="Search by brand..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={searchInputStyle}
            />
            <button onClick={handleSearch} style={searchButtonStyle}>
              Search
            </button>
          </div>
        </section>

        {/* Trusted Brands Slider */}
        <ClientLogoBar />

        {/* Active Countries */}
        <section style={activeCountriesSection}>
          <h3 style={activeTitle}>🌍 We’re Active In</h3>
          <div style={countryButtonContainer}>
            {['Jordan', 'UAE', 'Saudi', 'Egypt', 'Qatar'].map((country) => (
              <button
                key={country}
                onClick={() => router.push(`/${country.toLowerCase()}`)}
                style={countryButton}
              >
                {country}
              </button>
            ))}
          </div>
        </section>

        {/* CTA: Add Brand */}
        <section style={addBrandBannerStyle}>
          <h3 style={ctaTextStyle}>
            Own a business? Let your brand be part of the trust loop.
          </h3>
          {/* <button
            style={searchButtonStyle}
            onClick={() => router.push('/add-brand')}
          >
            Add Your Brand
          </button> */}
          <Link className='hover:no-underline mt-2' href='/register/brand' style={searchButtonStyle}>
          Add Your Brand</Link>
        </section>
      </main>
    </>
  )
}

/* === Styles === */

const promoBarStyle: React.CSSProperties = {
  backgroundColor: '#a3f34b',
  color: '#000',
  padding: '12px 24px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '15px',
  fontWeight: 500,
  gap: '10px',
  flexWrap: 'wrap',
  borderBottom: '1px solid #d2ff9d',
}

const promoLabelStyle: React.CSSProperties = {
  backgroundColor: '#0f0f0f',
  color: '#fff',
  padding: '4px 12px',
  borderRadius: '9999px',
  fontWeight: 600,
  fontSize: '13px',
  display: 'inline-block',
}

const mainStyle: React.CSSProperties = {
  padding: '48px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
  backgroundColor: '#0f0f0f',
  color: '#ffffff',
  fontFamily: 'Inter, sans-serif',
}

const heroSectionStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '56px',
}

const heroTitleStyle: React.CSSProperties = {
  fontSize: '40px',
  fontWeight: 700,
  marginBottom: '12px',
}

const heroSubtitleStyle: React.CSSProperties = {
  color: '#888',
  fontSize: '16px',
  marginBottom: '28px',
}

const searchContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '12px',
}

const searchInputStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '420px',
  padding: '14px 18px',
  borderRadius: '10px',
  border: '1px solid #333',
  backgroundColor: '#191919',
  color: 'white',
  fontSize: '16px',
}

const searchButtonStyle: React.CSSProperties = {
  padding: '14px 24px',
  backgroundColor: '#87e64c',
  border: 'none',
  borderRadius: '8px',
  color: 'black',
  fontSize: '16px',
  fontWeight: 600,
  cursor: 'pointer',
  marginTop: '10px'
}

const addBrandBannerStyle: React.CSSProperties = {
  backgroundColor: '#1f1f1f',
  border: '1px dashed #87e64c',
  borderRadius: '16px',
  padding: '28px',
  textAlign: 'center',
  marginTop: '80px',
}

const ctaTextStyle: React.CSSProperties = {
  fontSize: '20px',
  marginBottom: '25px',
  color: 'white',
}

const activeCountriesSection: React.CSSProperties = {
  marginTop: '72px',
  marginBottom: '48px',
  textAlign: 'center',
}

const activeTitle: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: 600,
  marginBottom: '20px',
  color: 'white',
}

const countryButtonContainer: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  justifyContent: 'center',
  flexWrap: 'wrap',
}

const countryButton: React.CSSProperties = {
  backgroundColor: '#191919',
  color: '#87e64c',
  border: '1px solid #87e64c',
  padding: '10px 20px',
  borderRadius: '9999px',
  fontSize: '15px',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background 0.2s',
  whiteSpace: 'nowrap',
}
