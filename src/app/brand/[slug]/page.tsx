'use client'

import { useParams, useRouter } from 'next/navigation'
import { CSSProperties, useEffect, useState } from 'react'

const productTags = ['General', 'Burger', 'Delivery', 'Support']
type Review = {
  name?: string
  createdAt: string
  echo: 'handshake' | 'loved' | 'adored' | 'obsessed' | 'broken'
  product?: string
  text: string
  proofUrl?: string
}
export default function BrandProfilePage() {
  const { slug } = useParams()
  const router = useRouter()
  const [reviews, setReviews] = useState<Review[]>([])
  const [activeTag, setActiveTag] = useState('General')

  const brand = {
    name: slug?.toString().replace(/-/g, ' ') || 'Unknown Brand',
    location: 'Amman, Jordan',
    logoUrl: '/logos/burgercraft.png',
    coverUrl: '/covers/burgercraft.jpg',
    description: 'BurgerCraft offers customizable burgers with premium ingredients. 24/7 delivery across Amman.',
    isClaimed: false, // 💡 Toggle this to true to hide claim box
    echoes: {
      handshake: 32,
      loved: 210,
      adored: 85,
      obsessed: 27,
      broken: 4,
    },
    pros: ['Fast delivery', 'Juicy patties', 'Great customization'],
    cons: ['Expensive sides', 'Crowded on weekends'],
  }

  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem(`reviews-${slug}`) || '[]')
  //   setReviews(saved)
  // }, [slug])
useEffect(() => {
  try {
    const saved: Review[] = JSON.parse(localStorage.getItem(`reviews-${slug}`) || '[]')
    setReviews(saved)
  } catch (error) {
    console.error('Failed to load reviews from localStorage:', error)
    setReviews([])
  }
}, [slug])
  return (
    <main style={{ backgroundColor: '#0e0e0e', color: 'white', minHeight: '100vh' }}>
      {/* Cover + Logo */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
        <img src={brand.coverUrl} alt="cover" style={coverStyle} />
        <img src={brand.logoUrl} alt="logo" style={logoStyle} />
      </div>

      {/* Brand Info */}
      <div style={{ padding: '80px 24px 24px', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '4px' }}>{brand.name}</h1>
        <p style={{ color: '#aaa', marginBottom: '16px' }}>{brand.location}</p>

        <div style={echoGrid}>
          <span style={echoItem}>🤝 {brand.echoes.handshake}</span>
          <span style={echoItem}>❤️ {brand.echoes.loved}</span>
          <span style={echoItem}>💜 {brand.echoes.adored}</span>
          <span style={echoItem}>🔥 {brand.echoes.obsessed}</span>
          <span style={echoItem}>💔 {brand.echoes.broken}</span>
        </div>

        <p style={{ marginTop: '24px', fontSize: '15px', color: '#ccc' }}>{brand.description}</p>

        {/* 🔐 Claim Business */}
        {!brand.isClaimed && (
          <div style={claimBox}>
            <p style={{ fontSize: '15px', marginBottom: '10px' }}>
              This business has not been claimed by its official owner.
            </p>
            <button style={claimButton} onClick={() => router.push(`/claim/${slug}`)}>
              ✅ Claim this business
            </button>
          </div>
        )}

        {/* Review CTA */}
        <div style={{ marginTop: '40px', padding: '24px', backgroundColor: '#111', borderRadius: '16px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>
            Tried this brand before? Share your thoughts and help millions make informed decisions.
          </h3>
          <button style={reviewButton} onClick={() => router.push(`/brand/${slug}/review`)}>
            ✍️ Leave a Review
          </button>
        </div>

        {/* Pros & Cons Table */}
        <div style={prosConsWrapper}>
          <div>
            <h4 style={prosTitle}>👍 Pros</h4>
            <ul style={listStyle}>
              {brand.pros.map((item, i) => (
                <li key={i} style={listItem}>+ {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={consTitle}>👎 Cons</h4>
            <ul style={listStyle}>
              {brand.cons.map((item, i) => (
                <li key={i} style={listItem}>– {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Filter Tabs */}
        <div style={filterTabs}>
          {productTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              style={{
                ...filterTabStyle,
                backgroundColor: activeTag === tag ? '#87e64c' : '#191919',
                color: activeTag === tag ? 'white' : '#ccc',
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Review Cards */}
        <section style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>📝 Latest Reviews</h2>
          {reviews.length === 0 ? (
            <p style={{ color: '#999' }}>No reviews yet.</p>
          ) : (
            reviews
              .filter(r => r?.product === activeTag || activeTag === 'General')
              .map((rev, i) => (
                <div key={i} style={reviewCard}>
                  <div style={avatar}>{rev.name?.[0]?.toUpperCase() || 'U'}</div>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>
                      {rev.name || 'Anonymous'}
                    </div>
                    <div style={{ fontSize: '13px', color: '#888' }}>
                      {new Date(rev.createdAt).toLocaleDateString()} • {rev.echo === 'loved' ? '❤️ Loved' : '💔 Broken'} • <span style={{ color: '#87e64c' }}>{rev.product || 'General'}</span>
                    </div>
                    <p style={{ marginTop: '8px', color: '#ddd' }}>{rev.text}</p>
                    {rev.proofUrl && (
                      <img
                        src={rev.proofUrl}
                        alt="proof"
                        style={{ marginTop: '8px', maxWidth: '100%', borderRadius: '8px' }}
                      />
                    )}
                  </div>
                </div>
              ))
          )}
        </section>
      </div>
    </main>
  )
}

/* === Styles === */
const coverStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(0.6)',
}

const logoStyle: CSSProperties = {
  position: 'absolute',
  bottom: '-32px',
  left: '24px',
  width: '96px',
  height: '96px',
  borderRadius: '50%',
  border: '4px solid #0e0e0e',
  objectFit: 'cover',
  backgroundColor: '#222',
}

const echoGrid: CSSProperties = {
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  marginBottom: '16px',
}

const echoItem: CSSProperties = {
  backgroundColor: '#1f1f1f',
  padding: '6px 12px',
  borderRadius: '10px',
  fontSize: '14px',
  color: 'white',
}

const reviewButton: CSSProperties = {
  marginTop: '8px',
  backgroundColor: '#87e64c',
  color: 'black',
  fontWeight: 'bold',
  padding: '10px 18px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
}

const prosConsWrapper: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '48px',
  marginTop: '40px',
  marginBottom: '32px',
  flexWrap: 'wrap',
}

const prosTitle: CSSProperties = {
  color: '#87e64c',
  fontSize: '16px',
  marginBottom: '8px',
}

const consTitle: CSSProperties = {
  color: '#f87171',
  fontSize: '16px',
  marginBottom: '8px',
}

const listStyle: CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  color: '#ccc',
  fontSize: '14px',
}

const listItem: CSSProperties = {
  marginBottom: '6px',
}

const filterTabs: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginBottom: '24px',
}

const filterTabStyle: CSSProperties = {
  padding: '8px 16px',
  borderRadius: '6px',
  border: '1px solid #333',
  fontSize: '14px',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.2s',
}

const reviewCard: CSSProperties = {
  backgroundColor: '#111',
  padding: '20px',
  borderRadius: '12px',
  marginBottom: '20px',
  display: 'flex',
  gap: '16px',
}

const avatar: CSSProperties = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: '#333',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '18px',
  color: '#87e64c',
  flexShrink: 0,
}

const claimBox: CSSProperties = {
  backgroundColor: '#191919',
  border: '1px dashed #444',
  padding: '20px',
  borderRadius: '12px',
  marginTop: '24px',
  marginBottom: '32px',
}

const claimButton: CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  fontWeight: 500,
  border: '1px solid #555',
  padding: '10px 16px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
}
