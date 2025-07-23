'use client'

import { useState } from 'react'

export default function RegisterBrandPage() {
  const [form, setForm] = useState({
    name: '',
    logoUrl: '',
    email: '',
    password: '',
    city: '',
    category: '',
    description: '',
  })

  return (
    <main className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={card}>
        <h1 style={heading}>🚀 Register Your Brand</h1>
        <p style={subheading}>Start building trust with customers today.</p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label>Logo URL</label>
            <input
              type="text"
              placeholder="Paste logo URL"
              value={form.logoUrl}
              onChange={(e) => setForm({ ...form, logoUrl: e.target.value })}
            />
          </div>

          <div>
            <label>Brand Name</label>
            <input
              type="text"
              placeholder="Enter brand name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ flex: 1 }}>
              <label>City</label>
              <select
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              >
                <option value="">Select a city</option>
                <option value="Amman">Amman</option>
                <option value="Riyadh">Riyadh</option>
              </select>
            </div>

            <div style={{ flex: 1 }}>
              <label>Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option value="">Choose a category</option>
                <option value="Food">Food</option>
                <option value="Gym">Gym</option>
                <option value="Store">Store</option>
              </select>
            </div>
          </div>

          <div>
            <label>Short Description</label>
            <textarea
              placeholder="Tell us a bit about your brand"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>

          <button type="submit">📝 Register Brand</button>
        </form>

        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '24px', color: '#aaa' }}>
          By registering, you agree to our <a href="#">Terms of Use</a>.
        </p>
      </div>
    </main>
  )
}

const card: React.CSSProperties = {
  backgroundColor: '#121212',
  padding: '32px',
  borderRadius: '16px',
  maxWidth: '500px',
  margin: '0 auto',
  border: '1px solid #333',
  boxShadow: '0 0 10px rgba(0,0,0,0.4)',
}

const heading: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: '8px',
}

const subheading: React.CSSProperties = {
  fontSize: '14px',
  color: '#aaa',
  marginBottom: '24px',
}
