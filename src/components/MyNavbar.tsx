'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import userImg from '../imgs/17797.png'

export default function MyNavbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedCountry, setSelectedCountry] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showProductMenu, setShowProductMenu] = useState(false)
  const [showDevMenu, setShowDevMenu] = useState(false)

  const isActive = (path: string) => pathname.includes(path)

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
    <>
      <nav className="bg-black w-full border-b border-gray-200 dark:border-gray-600 p-4">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
          {/* Left - Logo */}
          <div className="flex justify-between items-center w-full lg:w-auto">
            <Link href="/" className="nav-link text-2xl font-semibold text-white">
              HowWas?
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white block lg:hidden border p-2 rounded"
            >
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>

          {/* Center - Navigation Links (lg) */}
          <div className="hidden lg:flex items-center justify-center gap-8 text-white mt-4 lg:mt-0">
            <NavLinks
              onLinkClick={() => {}}
              isActive={isActive}
              showProductMenu={showProductMenu}
              setShowProductMenu={setShowProductMenu}
              showDevMenu={showDevMenu}
              setShowDevMenu={setShowDevMenu}
            />
          </div>

          {/* Right - Actions */}
          <div className="hidden lg:flex items-center gap-3 text-white mt-4 lg:mt-0">
            <select value={selectedCountry} onChange={handleCountryChange} style={countrySelectStyle}>
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
              src={userImg}
              alt="User"
              width={32}
              height={32}
              style={{ borderRadius: '50%', backgroundColor: '#2a2a2a', padding: 4 }}
            />
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden mt-4 p-4 bg-gray-800 text-white rounded shadow-lg">
              <NavLinks
                onLinkClick={() => setMenuOpen(false)}
                isActive={isActive}
                showProductMenu={showProductMenu}
                setShowProductMenu={setShowProductMenu}
                showDevMenu={showDevMenu}
                setShowDevMenu={setShowDevMenu}
              />
              {/* Actions below links for small screens */}
              <div className="mt-4 flex flex-col gap-2">
                <select value={selectedCountry} onChange={handleCountryChange} style={countrySelectStyle}>
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
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

function NavLinks({
  onLinkClick,
  isActive,
  showProductMenu,
  setShowProductMenu,
  showDevMenu,
  setShowDevMenu,
}: {
  onLinkClick: () => void
  isActive: (path: string) => boolean
  showProductMenu: boolean
  setShowProductMenu: (v: boolean) => void
  showDevMenu: boolean
  setShowDevMenu: (v: boolean) => void
}) {
  return (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-sm font-medium">
      <li>
        <Link
          href="/"
          onClick={onLinkClick}
          className={`nav-link ${isActive('/home') ? 'text-white-500 font-semibold' : 'text-white'} hover:underline`}
        >
          Home
        </Link>
      </li>
      <li
        onMouseEnter={() => setShowProductMenu(true)}
        onMouseLeave={() => setShowProductMenu(false)}
        style={navItemStyle}
      >
        <span className="cursor-pointer text-white">Products ▾</span>
        {showProductMenu && <Dropdown items={['EchoScore', 'Echo Tags', 'Trust Loop']} />}
      </li>
      <li
        onMouseEnter={() => setShowDevMenu(true)}
        onMouseLeave={() => setShowDevMenu(false)}
        style={navItemStyle}
      >
        <span className="cursor-pointer text-white">Developers ▾</span>
        {showDevMenu && <Dropdown items={['API Docs', 'Webhooks', 'Integration']} />}
      </li>
      <li>
        <Link
          href="/Enterprise"
          onClick={onLinkClick}
          className={`nav-link ${isActive('/Enterprise') ? 'text-white-500 font-semibold' : 'text-white'} hover:underline`}
        >
          Enterprise
        </Link>
      </li>
      <li>
        <Link
          href="/Pricing"
          onClick={onLinkClick}
          className={`nav-link ${isActive('/Pricing') ? 'text-white-500 font-semibold' : 'text-white'} hover:underline`}
        >
          Pricing
        </Link>
      </li>
    </ul>
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

// Styles
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

const navItemStyle: React.CSSProperties = {
  position: 'relative',
}
