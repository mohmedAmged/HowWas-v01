'use client'

import { useState } from 'react'

export default function UserSettings() {
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [nickname, setNickname] = useState('')
  const [displayNameOption, setDisplayNameOption] = useState<'full' | 'nickname'>('full')

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setProfileImage(file)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Saving settings:', {
      email,
      phone,
      nickname,
      displayName: displayNameOption,
      image: profileImage?.name,
    })
    alert('✅ Settings saved!')
  }

  return (
    <main style={wrapper}>
      <h1 style={heading}>🛠️ User Settings</h1>

      <form onSubmit={handleSubmit} style={formStyle}>
        {/* Profile Image */}
        <section>
          <label style={sectionLabel}>Profile Picture</label>
          <p style={{ color: '#aaa', marginBottom: '8px' }}>
            {profileImage ? profileImage.name : 'No Image'}
          </p>
          <input type="file" accept="image/*" onChange={handleImageUpload} style={fileInputStyle} />
        </section>

        {/* Email */}
        <section>
          <label style={sectionLabel}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={inputStyle}
          />
        </section>

        {/* Phone */}
        <section>
          <label style={sectionLabel}>Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +962..."
            style={inputStyle}
          />
        </section>

        {/* Nickname */}
        <section>
          <label style={sectionLabel}>Nickname</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Your nickname"
            style={inputStyle}
          />
        </section>

        {/* Display Name Preference */}
        <section>
          <label style={sectionLabel}>Name Display Preference</label>
          <div style={radioGroup}>
            <label style={radioLabel}>
              <input
                type="radio"
                name="nameDisplay"
                value="full"
                checked={displayNameOption === 'full'}
                onChange={() => setDisplayNameOption('full')}
              />
              <span>Full Name</span>
            </label>
            <label style={radioLabel}>
              <input
                type="radio"
                name="nameDisplay"
                value="nickname"
                checked={displayNameOption === 'nickname'}
                onChange={() => setDisplayNameOption('nickname')}
              />
              <span>Nickname</span>
            </label>
          </div>
        </section>

        <button type="submit" style={saveButton}>Save Settings</button>
      </form>
    </main>
  )
}

// Styles
const wrapper: React.CSSProperties = {
  backgroundColor: '#0e0e0e',
  color: 'white',
  padding: '40px 24px',
  maxWidth: '640px',
  margin: '0 auto',
  fontFamily: 'Inter, sans-serif',
}

const heading: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: '24px',
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '24px',
}

const sectionLabel = {
  fontSize: '15px',
  fontWeight: 600,
  marginBottom: '8px',
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

const fileInputStyle = {
  ...inputStyle,
  padding: '8px',
}

const radioGroup = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '10px',
  marginTop: '8px',
}

const radioLabel = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '14px',
  color: '#eee',
}

const saveButton = {
  backgroundColor: '#87e64c',
  color: '#000',
  fontWeight: 600,
  border: 'none',
  padding: '12px 20px',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '15px',
  marginTop: '10px',
}
