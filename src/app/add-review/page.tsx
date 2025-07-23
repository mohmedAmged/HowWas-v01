'use client'

import { CSSProperties, useState } from 'react'
import { useRouter } from 'next/navigation'
type BrandData = {
  country: string
  branches: string[]
  items: string[]
}
const mockBrands = ['Star Burger', 'Tech World', 'Boba Place']
const mockCountries = ['Jordan', 'UAE', 'USA']

const mockData: Record<string, BrandData> = {
  'Star Burger': {
    country: 'Jordan',
    branches: ['Abdoun', 'Khalda'],
    items: ['Burger', 'Wrap'],
  },
  'Tech World': {
    country: 'UAE',
    branches: ['Downtown'],
    items: ['Laptop Repair', 'Phone Fix'],
  },
  'Boba Place': {
    country: 'USA',
    branches: ['Main St'],
    items: ['Milk Tea', 'Mango Boba'],
  },
}


export default function LeaveReviewPage() {
  const router = useRouter()

  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [isUnlisted, setIsUnlisted] = useState(false)
  const [unlistedBrandData, setUnlistedBrandData] = useState({
    brandName: '',
    country: '',
  })

  const [form, setForm] = useState({
    text: '',
    echo: '',
    proof: '',
    branch: '',
    item: 'general',
    firstTime: false,
  })

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand)
    setIsUnlisted(false)
    setShowForm(true)
    setForm((prev) => ({ ...prev, branch: '', item: 'general' }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('📝 Review submitted:', {
      brand: selectedBrand,
      country: isUnlisted ? unlistedBrandData.country : mockData[selectedBrand]?.country,
      isUnlisted,
      ...form,
    })
    alert('✅ Echo submitted! Thank you.')
    router.push('/')
  }

  const brandOptions = mockBrands.filter((b) =>
    b.toLowerCase().includes(selectedBrand.toLowerCase()) &&
    (selectedCountry === '' || mockData[b].country === selectedCountry)
  )

  return (
    <main style={pageWrapper}>
      <h1 style={pageTitle}>Leave a Review</h1>

      {/* Country Filter */}
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        style={{ ...select, marginBottom: '12px' }}
      >
        <option value="">🌍 All Countries (Optional)</option>
        {mockCountries.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {/* Brand Search */}
      {!showForm && (
        <div style={{ marginBottom: '20px' }}>
          <label style={sectionLabel}>Select Brand</label>
          <input
            type="text"
            placeholder="Start typing a brand name..."
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value)
              setShowForm(false)
            }}
            style={brandInput}
            autoFocus
          />
          <ul style={{ marginTop: '8px', listStyle: 'none', padding: 0 }}>
            {brandOptions.map((b) => (
              <li
                key={b}
                style={{ cursor: 'pointer', padding: '8px', borderBottom: '1px solid #333', color: '#87e64c' }}
                onClick={() => handleBrandSelect(b)}
              >
                {b}
              </li>
            ))}
          </ul>

          {/* Unlisted Brand Entry */}
          {brandOptions.length === 0 && selectedBrand.length > 2 && (
            <div style={{ marginTop: '16px', color: '#ccc' }}>
              😕 No brand found. You can add it here and leave a review:
              <div style={{ border: '1px dashed #444', padding: '12px', borderRadius: '8px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                  type="text"
                  placeholder="Brand Name"
                  value={unlistedBrandData.brandName}
                  onChange={(e) => setUnlistedBrandData({ ...unlistedBrandData, brandName: e.target.value })}
                  style={brandInput}
                />
                <input
                  type="text"
                  placeholder="Country"
                  value={unlistedBrandData.country}
                  onChange={(e) => setUnlistedBrandData({ ...unlistedBrandData, country: e.target.value })}
                  style={brandInput}
                />
                <button
                  onClick={() => {
                    setSelectedBrand(unlistedBrandData.brandName)
                    setIsUnlisted(true)
                    setShowForm(true)
                  }}
                  style={{
                    ...submitButton,
                    backgroundColor: '#333',
                    color: '#fff',
                    fontSize: '14px',
                    padding: '10px',
                  }}
                >
                  ➕ Add & Review
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Review Form */}
      {showForm && (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Review Text */}
          <textarea
            placeholder="Write your honest review here..."
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            required
            style={textarea}
          />

          {/* Echo Type */}
          <div style={sectionBlock}>
            <label style={sectionLabel}>Echo Type</label>
            <div style={radioGroup}>
              <label style={radioLabel}>
                <input type="radio" name="echo" value="loved" onChange={(e) => setForm({ ...form, echo: e.target.value })} required />
                <span style={radioText}>❤️ Loved</span>
              </label>
              <label style={radioLabel}>
                <input type="radio" name="echo" value="broken" onChange={(e) => setForm({ ...form, echo: e.target.value })} />
                <span style={radioText}>💔 Broken</span>
              </label>
            </div>
          </div>

          {/* Branch (optional) */}
          {!isUnlisted && (
            <div style={sectionBlock}>
              <label style={sectionLabel}>Branch</label>
              <select value={form.branch} onChange={(e) => setForm({ ...form, branch: e.target.value })} required style={select}>
                <option value="">Select a branch</option>
                {mockData[selectedBrand]?.branches.map((b: string) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          )}

          {/* Item (optional) */}
          {!isUnlisted && (
            <div style={sectionBlock}>
              <label style={sectionLabel}>Item</label>
              <select value={form.item} onChange={(e) => setForm({ ...form, item: e.target.value })} style={select}>
                <option value="general">General Experience</option>
                {mockData[selectedBrand]?.items.map((item: string) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          )}

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

          {/* First Time Checkbox */}
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
      )}
    </main>
  )
}

// Styles
const pageWrapper: CSSProperties = {
  backgroundColor: '#0e0e0e',
  color: 'white',
  padding: '40px 24px',
  maxWidth: '720px',
  margin: '0 auto',
  fontFamily: 'Inter, sans-serif',
}

const pageTitle: CSSProperties = {
  fontSize: '26px',
  fontWeight: 600,
  marginBottom: '24px',
}

const sectionLabel: CSSProperties = {
  fontSize: '14px',
  fontWeight: 500,
  color: '#ccc',
}

const brandInput: CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '8px',
  backgroundColor: '#191919',
  border: '1px solid #333',
  color: '#fff',
  fontSize: '15px',
}

const textarea: CSSProperties = {
  ...brandInput,
  minHeight: '120px',
  lineHeight: 1.5,
}

const sectionBlock: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
}

const radioGroup: CSSProperties = {
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
}

const radioLabel: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '14px',
}

const radioText: CSSProperties = {
  fontWeight: 500,
  color: '#fff',
}

const select: CSSProperties = {
  backgroundColor: '#191919',
  color: 'white',
  padding: '12px 14px',
  fontSize: '14px',
  borderRadius: '8px',
  border: '1px solid #333',
}

const fileInput: CSSProperties = {
  color: '#ccc',
  fontSize: '14px',
}

const checkboxRow: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  marginTop: '10px',
}

const submitButton: CSSProperties = {
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
