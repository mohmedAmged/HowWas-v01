'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function UserLoginPage() {
  const router = useRouter()

  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message || 'Login failed.')

      // Save token or session logic here (e.g., localStorage)
      localStorage.setItem('token', data.token)

      router.push('/user/dashboard')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ padding: '60px 20px', background: '#0f0f0f', minHeight: '100vh' }}>
      <div style={card}>
        <h1 style={heading}>User Login</h1>
        <p style={subheading}>Log in to leave trusted reviews and track your activity.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <label>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter your email"
            required
            style={inputStyle}
          />

          <label>Password</label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Enter your password"
            required
            style={inputStyle}
          />

          {error && <p style={{ color: '#ff5252', fontSize: '14px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </main>
  )
}

const card = {
  backgroundColor: '#121212',
  padding: '40px',
  borderRadius: '16px',
  maxWidth: '480px',
  margin: '0 auto',
  border: '1px solid #333',
  boxShadow: '0 0 12px rgba(0,0,0,0.5)',
}

const heading = {
  fontSize: '24px',
  fontWeight: 700,
  color: 'white',
  marginBottom: '6px',
}

const subheading = {
  fontSize: '14px',
  color: '#aaa',
  marginBottom: '24px',
}

const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  backgroundColor: '#191919',
  border: '1px solid #333',
  color: 'white',
  fontSize: '15px',
}

const buttonStyle = {
  padding: '12px',
  backgroundColor: '#87e64c',
  color: 'white',
  fontSize: '16px',
  fontWeight: 600,
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
}
