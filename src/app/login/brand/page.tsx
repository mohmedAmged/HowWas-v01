'use client'

import { useState } from 'react'

export default function BrandLoginPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  return (
    <main className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={card}>
        <h1 style={heading}>🚀 Brand Login</h1>
        <p style={subheading}>Access your brand dashboard and manage your reputation.</p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button type="submit">🔐 Login</button>
        </form>

        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '24px', color: '#aaa' }}>
          Forgot your password? <a href="#">Reset it here</a>.
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
