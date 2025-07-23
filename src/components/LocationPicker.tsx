'use client'

import { useState, useEffect } from 'react'

const locationsByCountry: Record<string, string[]> = {
  jordan: ['Amman', 'Irbid', 'Zarqa'],
  uae: ['Dubai', 'Abu Dhabi', 'Sharjah'],
  usa: ['New York', 'California - Los Angeles', 'Texas - Houston'],
}

interface Props {
  country: string
  onLocationSelected: (location: string) => void
}

export default function LocationPicker({ country, onLocationSelected }: Props) {
  const [selected, setSelected] = useState<string>('')

  const locations = locationsByCountry[country.toLowerCase()] || []

  useEffect(() => {
    const cached = localStorage.getItem(`howwaz-location-${country}`)
    if (cached) {
      setSelected(cached)
      onLocationSelected(cached)
    }
  }, [country, onLocationSelected])

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelected(value)
    localStorage.setItem(`howwaz-location-${country}`, value)
    onLocationSelected(value)
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="location-select" style={{ marginRight: '10px' }}>Select your city:</label>
      <select
        id="location-select"
        value={selected}
        onChange={handleSelect}
        style={{
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: '#191919',
          color: 'white',
          border: '1px solid #333',
        }}
      >
        <option value="">-- Choose --</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>
    </div>
  )
}
