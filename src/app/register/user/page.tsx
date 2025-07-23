'use client'

import { useEffect, useState } from 'react'

type LocationData = {
  [key: string]: string[]
}

export default function RegisterUserPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    country: '',
    city: '',
  })

  const [locationData, setLocationData] = useState<LocationData>({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    const fetchLocationData = async () => {
      const mockData: LocationData = {
        Jordan: ['Amman', 'Irbid', 'Zarqa'],
        Saudi: ['Riyadh', 'Jeddah', 'Khobar'],
        Egypt: ['Cairo', 'Alexandria', 'Giza'],
      }

      setLocationData(mockData)
    }

    fetchLocationData()
  }, [])

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'country' ? { city: '' } : {}),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const res = await fetch('http://localhost:8000/api/auth/register-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data?.message || 'Registration failed')

      setSuccess('✅ Account created successfully!')
    } catch (err: unknown) {
  if (err instanceof Error) {
    setError(err.message)
  } else {
    setError('An unknown error occurred.')
  }
} finally {
      setLoading(false)
    }
  }

  return (
    <main className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={card}>
        <h1 style={heading}>👤 Create Your Account</h1>
        <p style={subheading}>Join Howwaz and start sharing trusted reviews.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Choose a password"
              value={form.password}
              onChange={(e) => handleChange('password', e.target.value)}
              required
            />
          </div>

          <div>
            <label>Country</label>
            <select value={form.country} onChange={(e) => handleChange('country', e.target.value)} required>
              <option value="">Select your country</option>
              {Object.keys(locationData).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>City</label>
            <select
              value={form.city}
              onChange={(e) => handleChange('city', e.target.value)}
              disabled={!form.country}
              required
            >
              <option value="">Select your city</option>
              {form.country &&
                locationData[form.country]?.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : '📝 Register'}
          </button>
        </form>

        {error && <p style={{ color: 'red', marginTop: '16px' }}>{error}</p>}
        {success && <p style={{ color: 'green', marginTop: '16px' }}>{success}</p>}

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
