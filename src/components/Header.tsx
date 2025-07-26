'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import logo1 from '../imgs/846d1995-0d7c-4877-a794-04a4d60315ce.png'
export default function Header() {
  const router = useRouter()

  const [showProductMenu, setShowProductMenu] = useState(false)
  const [showDevMenu, setShowDevMenu] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('')

  const countries = [
    { code: 'jordan', name: 'Jordan', flag: '🇯🇴' },
    { code: 'uae', name: 'UAE', flag: '🇦🇪' },
    { code: 'usa', name: 'USA', flag: '🇺🇸' },
    { code: 'ksa', name: 'KSA', flag: '🇸🇦' },
    { code: 'egypt', name: 'Egypt', flag: '🇪🇬' },
  ]

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value
    setSelectedCountry(code)
    if (code) router.push(`/${code}`)
  }

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <Link href="/" style={logoStyle}>
          <Image src={logo1} alt="Howwaz" width={120} height={80} />
          {/* <span style={{ fontWeight: 600, fontSize: '18px' }}>howwaz</span> */}
        </Link>

        {/* Navigation */}
        <nav style={navStyle}>
          <div
            onMouseEnter={() => setShowProductMenu(true)}
            onMouseLeave={() => setShowProductMenu(false)}
            style={navItemStyle}
          >
            <span>Product ▾</span>
            {showProductMenu && <Dropdown items={['EchoScore', 'Echo Tags', 'Trust Loop']} />}
          </div>

          <div
            onMouseEnter={() => setShowDevMenu(true)}
            onMouseLeave={() => setShowDevMenu(false)}
            style={navItemStyle}
          >
            <span>Developers ▾</span>
            {showDevMenu && <Dropdown items={['API Docs', 'Webhooks', 'Integration']} />}
          </div>

          <Link href="#" style={navLinkStyle}>Enterprise</Link>
          <Link href="#" style={navLinkStyle}>Pricing</Link>
          <Link href="#" style={navLinkStyle}>Blog</Link>
        </nav>

        {/* Right section */}
        <div style={rightNavStyle}>
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            style={countrySelectStyle}
          >
            <option value="">🌍 Country</option>
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.name}
              </option>
            ))}
          </select>

          <Link href="/dashboard" style={dashboardButton}>
            Dashboard
          </Link>

          <Image
            src="/avatar.svg"
            alt="User"
            width={32}
            height={32}
            style={{
              borderRadius: '50%',
              backgroundColor: '#2a2a2a',
              padding: 4,
            }}
          />
        </div>
      </div>
    </header>
  )
}

function Dropdown({ items }: { items: string[] }) {
  return (
    <div style={dropdownStyle}>
      {items.map((item, idx) => (
        <Link href="#" key={idx} style={dropdownItem}>
          {item}
        </Link>
      ))}
    </div>
  )
}

/* === Styles === */

const headerStyle: React.CSSProperties = {
  backgroundColor: '#0f0f0f',
  padding: '12px 0',
  borderBottom: '1px solid #191919',
}

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 24px',
}

const logoStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: 'white',
  textDecoration: 'none',
}

const navStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
}

const navItemStyle: React.CSSProperties = {
  position: 'relative',
  cursor: 'pointer',
  color: '#fff',
  fontSize: '15px',
  fontWeight: 500,
}

const navLinkStyle: React.CSSProperties = {
  color: '#fff',
  fontSize: '15px',
  fontWeight: 500,
  textDecoration: 'none',
}

const rightNavStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
}

const dashboardButton: React.CSSProperties = {
  backgroundColor: '#87e64c',
  color: 'black',
  padding: '8px 14px',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: 600,
  textDecoration: 'none',
}

const countrySelectStyle: React.CSSProperties = {
  padding: '8px 10px',
  backgroundColor: '#191919',
  color: 'white',
  border: '1px solid #333',
  borderRadius: '8px',
  fontSize: '14px',
  cursor: 'pointer',
}

const dropdownStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  marginTop: '6px',
  backgroundColor: '#191919',
  border: '1px solid #333',
  borderRadius: '8px',
  padding: '8px 0',
  zIndex: 10,
  minWidth: '160px',
}

const dropdownItem: React.CSSProperties = {
  padding: '10px 16px',
  color: '#ccc',
  textDecoration: 'none',
  display: 'block',
  fontSize: '14px',
  transition: 'background 0.2s',
}
