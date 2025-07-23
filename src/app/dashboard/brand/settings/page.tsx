'use client'

import { useState } from 'react'

export default function BrandSettingsPage() {
  const [form, setForm] = useState({
    name: 'BurgerCraft',
    domain: 'burgercraft.jo',
    logoUrl: '',
    coverUrl: '',
    category: 'Food',
    country: 'Jordan',
    city: 'Amman',
    phone: '',
    supportEmail: '',
    social: {
      instagram: '',
      facebook: '',
      tiktok: '',
    },
    returnPolicy: '',
    values: '',
    givesBack: false,
    privacyPractices: '',
  })

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSocialChange = (platform: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      social: { ...prev.social, [platform]: value },
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('✅ Settings updated!')
  }

  return (
    <main style={container}>
      <h1 style={header}>Brand Settings</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Basic Info */}
        <div>
          <label style={label}>Brand Name</label>
          <input type="text" value={form.name} onChange={(e) => handleChange('name', e.target.value)} style={input} />
        </div>
        <div>
          <label style={label}>Domain</label>
          <input type="text" value={form.domain} onChange={(e) => handleChange('domain', e.target.value)} style={input} />
        </div>

        {/* Logo & Cover */}
        <div>
          <label style={label}>Logo URL</label>
          <input type="text" value={form.logoUrl} onChange={(e) => handleChange('logoUrl', e.target.value)} style={input} />
        </div>
        <div>
          <label style={label}>Cover Image URL</label>
          <input type="text" value={form.coverUrl} onChange={(e) => handleChange('coverUrl', e.target.value)} style={input} />
        </div>

        {/* Location & Contact */}
        <div>
          <label style={label}>Country</label>
          <input type="text" value={form.country} onChange={(e) => handleChange('country', e.target.value)} style={input} />
        </div>
        <div>
          <label style={label}>City</label>
          <input type="text" value={form.city} onChange={(e) => handleChange('city', e.target.value)} style={input} />
        </div>
        <div>
          <label style={label}>Phone</label>
          <input type="text" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} style={input} />
        </div>
        <div>
          <label style={label}>Support Email</label>
          <input type="email" value={form.supportEmail} onChange={(e) => handleChange('supportEmail', e.target.value)} style={input} />
        </div>

        {/* Social Media */}
        <div>
          <label style={label}>Instagram</label>
          <input type="text" value={form.social.instagram} onChange={(e) => handleSocialChange('instagram', e.target.value)} style={input} />
        </div>
        <div>
          <label style={label}>Facebook</label>
          <input type="text" value={form.social.facebook} onChange={(e) => handleSocialChange('facebook', e.target.value)} style={input} />
        </div>
        <div>
          <label style={label}>TikTok</label>
          <input type="text" value={form.social.tiktok} onChange={(e) => handleSocialChange('tiktok', e.target.value)} style={input} />
        </div>

        {/* Trust Signals */}
        <div>
          <label style={label}>Return/Refund Policy</label>
          <textarea value={form.returnPolicy} onChange={(e) => handleChange('returnPolicy', e.target.value)} style={textarea} />
        </div>
        <div>
          <label style={label}>Brand Values (Ethics, Sourcing, Privacy...)</label>
          <textarea value={form.values} onChange={(e) => handleChange('values', e.target.value)} style={textarea} />
        </div>
        <div>
          <label style={label}>Privacy Practices</label>
          <textarea value={form.privacyPractices} onChange={(e) => handleChange('privacyPractices', e.target.value)} style={textarea} />
        </div>

        <label>
          <input type="checkbox" checked={form.givesBack} onChange={(e) => handleChange('givesBack', e.target.checked)} />{' '}
          ✅ We give back to the community
        </label>

        <button type="submit" style={saveButton}>💾 Save Settings</button>
      </form>
    </main>
  )
}

// === Styles ===
const container: React.CSSProperties = {
  backgroundColor: '#0f0f0f',
  color: 'white',
  padding: '40px 24px',
  maxWidth: '700px',
  margin: '0 auto',
  fontFamily: 'Inter, sans-serif',
}

const header: React.CSSProperties = {
  fontSize: '24px',
  marginBottom: '24px',
  fontWeight: 600,
}

const label: React.CSSProperties = {
  display: 'block',
  marginBottom: '6px',
  fontSize: '14px',
  fontWeight: 500,
  color: '#ccc',
}

const input: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#191919',
  color: 'white',
  border: '1px solid #333',
  borderRadius: '8px',
  fontSize: '14px',
  marginBottom: '16px',
}

const textarea: React.CSSProperties = {
  ...input,
  minHeight: '100px',
}

const saveButton: React.CSSProperties = {
  backgroundColor: '#87e64c',
  color: 'black',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
}
