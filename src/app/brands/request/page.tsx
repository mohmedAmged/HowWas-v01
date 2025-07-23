'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function BrandRequestPage() {
  const router = useRouter()

  const [form, setForm] = useState({
    brandName: '',
    country: '',
    website: '',
    contactEmail: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Brand request submitted:', form)
    setSubmitted(true)
    setTimeout(() => router.push('/'), 2500)
  }

  return (
    <main style={pageWrapper}>
      <h1 style={pageTitle}>📩 Request to Add a Brand</h1>
      <p style={subtext}>Couldn’t find your brand? Submit it here and we'll verify it shortly.</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="text"
            placeholder="Brand Name"
            required
            value={form.brandName}
            onChange={(e) => setForm({ ...form, brandName: e.target.value })}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Country"
            required
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            style={inputStyle}
          />

          <input
            type="url"
            placeholder="Website (optional)"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Your Email (optional)"
            value={form.contactEmail}
            onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
            style={inputStyle}
          />

          <textarea
            placeholder="Why are you adding this brand? (optional)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={textareaStyle}
          />

          <button type="submit" style={buttonStyle}>
            Submit Request
          </button>
        </form>
      ) : (
        <p style={{ marginTop: '20px', color: '#87e64c' }}>✅ Brand request submitted successfully!</p>
      )}
    </main>
  )
}

// Styling
const pageWrapper: React.CSSProperties = {
  backgroundColor: '#0e0e0e',
  color: 'white',
  padding: '40px 24px',
  maxWidth: '640px',
  margin: '0 auto',
  fontFamily: 'Inter, sans-serif',
}

const pageTitle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 600,
  marginBottom: '8px',
}

const subtext: React.CSSProperties = {
  fontSize: '14px',
  color: '#aaa',
  marginBottom: '24px',
}

const inputStyle: React.CSSProperties = {
  backgroundColor: '#191919',
  color: 'white',
  padding: '12px 14px',
  fontSize: '14px',
  borderRadius: '8px',
  border: '1px solid #333',
}

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: '100px',
  resize: 'vertical',
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#87e64c',
  color: '#000',
  fontWeight: 600,
  border: 'none',
  padding: '14px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '15px',
  marginTop: '10px',
}
