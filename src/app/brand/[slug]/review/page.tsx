'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'

const mockBranches = ['Abdoun', 'Khalda', 'JVC Dubai']
const mockItems = ['Signature Burger', 'Chicken Wrap', 'Loaded Fries']

export default function LeaveReviewPage() {
  const { slug } = useParams()
  const router = useRouter()

  const [form, setForm] = useState({
    text: '',
    echo: '',
    proof: '',
    branch: '',
    item: 'general',
    firstTime: false,
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Review submitted:', form)
    alert('✅ Echo submitted!')
    router.push(`/brand/${slug}`)
  }

  return (
    <main style={pageWrapper}>
      <h1 style={pageTitle}>Leave a Review for {slug?.toString().replace(/-/g, ' ')}</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Textarea */}
        <textarea
          placeholder="Write your honest review here..."
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          required
          style={textarea}
        />

        {/* Echo Reaction */}
        <div style={sectionBlock}>
          <label style={sectionLabel}>Echo Type</label>
          <div style={radioGroup}>
            <label style={radioLabel}>
              <input
                type="radio"
                name="echo"
                value="loved"
                onChange={(e) => setForm({ ...form, echo: e.target.value })}
                required
              />
              <span style={radioText}>❤️ Loved</span>
            </label>
            <label style={radioLabel}>
              <input
                type="radio"
                name="echo"
                value="broken"
                onChange={(e) => setForm({ ...form, echo: e.target.value })}
              />
              <span style={radioText}>💔 Broken</span>
            </label>
          </div>
        </div>

        {/* Branch */}
        <div style={sectionBlock}>
          <label style={sectionLabel}>Branch</label>
          <select
            value={form.branch}
            onChange={(e) => setForm({ ...form, branch: e.target.value })}
            required
            style={select}
          >
            <option value="">Select a branch</option>
            {mockBranches.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Item */}
        <div style={sectionBlock}>
          <label style={sectionLabel}>Item</label>
          <select
            value={form.item}
            onChange={(e) => setForm({ ...form, item: e.target.value })}
            style={select}
          >
            <option value="general">General Experience</option>
            {mockItems.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Upload Proof */}
        <div style={sectionBlock}>
          <label style={sectionLabel}>Upload Proof (optional)</label>
          <input
            type="file"
            accept="image/*"
            style={fileInput}
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) {
                const reader = new FileReader()
                reader.onload = () => {
                  setForm({ ...form, proof: reader.result as string })
                }
                reader.readAsDataURL(file)
              }
            }}
          />
        </div>

        {/* First Time */}
        <label style={checkboxRow}>
          <input
            type="checkbox"
            checked={form.firstTime}
            onChange={(e) => setForm({ ...form, firstTime: e.target.checked })}
          />
          <span style={{ marginLeft: '8px' }}>This is my first review for this brand</span>
        </label>

        <button type="submit" style={submitButton}>✍️ Submit Echo</button>
      </form>
    </main>
  )
}

const pageWrapper: React.CSSProperties = {
  backgroundColor: '#0e0e0e',
  color: 'white',
  padding: '40px 24px',
  maxWidth: '720px',
  margin: '0 auto',
  fontFamily: 'Inter, sans-serif',
}

const pageTitle: React.CSSProperties = {
  fontSize: '26px',
  fontWeight: 600,
  marginBottom: '24px',
}

const textarea: React.CSSProperties = {
  width: '100%',
  minHeight: '140px',
  padding: '14px',
  borderRadius: '12px',
  backgroundColor: '#191919',
  border: '1px solid #333',
  color: '#fff',
  fontSize: '15px',
  lineHeight: 1.5,
}

const sectionBlock: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
}

const sectionLabel: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: 500,
  color: '#ccc',
}

const radioGroup: React.CSSProperties = {
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
}

const radioLabel: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '14px',
}

const radioText: React.CSSProperties = {
  fontWeight: 500,
  color: '#fff',
}

const select: React.CSSProperties = {
  backgroundColor: '#191919',
  color: 'white',
  padding: '12px 14px',
  fontSize: '14px',
  borderRadius: '8px',
  border: '1px solid #333',
}

const fileInput: React.CSSProperties = {
  color: '#ccc',
  fontSize: '14px',
}

const checkboxRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  marginTop: '10px',
}

const submitButton: React.CSSProperties = {
  backgroundColor: '#87e64c',
  color: '#000',
  fontWeight: 600,
  border: 'none',
  padding: '14px 20px',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '24px',
}
