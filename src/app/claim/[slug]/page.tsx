'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ClaimBrandPage() {
  const { slug } = useParams()
  const router = useRouter()

  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
    proof: null as File | null,
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setForm({ ...form, proof: file })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // ✅ Replace this with Supabase insert or API call
    console.log('Claim submitted:', {
      brandSlug: slug,
      ...form,
    })

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => router.push(`/brand/${slug}`), 2000)
    }, 1500)
  }

  return (
    <main style={wrapper}>
      <h1 style={heading}>✅ Claim &quot;{slug?.toString().replace(/-/g, ' ')}&quot;</h1>
      <p style={subheading}>Fill out the form to verify your ownership or authorized role.</p>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="text"
            placeholder="Your full name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Your business email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Your role (e.g. Owner, Manager)"
            required
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            style={inputStyle}
          />

          <textarea
            placeholder="Why are you claiming this brand? (optional)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={textareaStyle}
          />

          <div>
            <label style={sectionLabel}>Upload Proof (PDF or Image – optional)</label>
            <input type="file" accept="image/*,.pdf" onChange={handleFileChange} style={fileInputStyle} />
            {form.proof && <p style={{ fontSize: '13px', color: '#ccc' }}>📎 {form.proof.name}</p>}
          </div>

          <button type="submit" disabled={loading} style={submitButton}>
            {loading ? 'Submitting...' : 'Submit Claim'}
          </button>
        </form>
      ) : (
        <p style={{ color: '#87e64c', fontSize: '16px', marginTop: '20px' }}>
          ✅ Claim submitted successfully! Redirecting...
        </p>
      )}
    </main>
  )
}

// Styling
const wrapper = {
  backgroundColor: '#0e0e0e',
  color: 'white',
  padding: '40px 24px',
  maxWidth: '640px',
  margin: '0 auto',
  fontFamily: 'Inter, sans-serif',
}

const heading = {
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: '10px',
}

const subheading = {
  fontSize: '14px',
  color: '#aaa',
  marginBottom: '20px',
}

const sectionLabel = {
  fontSize: '14px',
  fontWeight: 500,
  marginBottom: '6px',
  display: 'block',
}

const inputStyle = {
  backgroundColor: '#191919',
  color: 'white',
  padding: '12px 14px',
  fontSize: '14px',
  borderRadius: '8px',
  border: '1px solid #333',
  width: '100%',
}

const textareaStyle = {
  ...inputStyle,
  minHeight: '100px',
}

const fileInputStyle = {
  marginTop: '6px',
  fontSize: '14px',
  color: '#ccc',
}

const submitButton = {
  backgroundColor: '#87e64c',
  color: '#000',
  fontWeight: 600,
  border: 'none',
  padding: '12px',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '15px',
  marginTop: '10px',
}
