'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import logo1 from '../imgs/846d1995-0d7c-4877-a794-04a4d60315ce.png'
import userImg from '../imgs/17797.png'
export default function Header() {
  const router = useRouter()
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleNavbar = () => {
    //     setIsOpen(!isOpen);
    // };
  const [showProductMenu, setShowProductMenu] = useState(false)
  const [showDevMenu, setShowDevMenu] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('')
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            src={userImg}
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
    // <header className="bg-[#0f0f0f] border-b border-[#191919] text-white">
    //   <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-3">
    //     {/* Logo */}
    //     <Link href="/" className="flex items-center gap-2 text-white no-underline">
    //       <Image src={logo1} alt="Howwaz" width={120} height={80} />
    //     </Link>

    //     {/* Hamburger menu (mobile only) */}
    //     <button title='nasms' className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
    //        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
    //                     </svg>
    //     </button>

    //     {/* Desktop Navigation */}
    //     <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
    //       <div
    //         className="relative cursor-pointer"
    //         onMouseEnter={() => setShowProductMenu(true)}
    //         onMouseLeave={() => setShowProductMenu(false)}
    //       >
    //         <span>Product ▾</span>
    //         {showProductMenu && <Dropdown items={['EchoScore', 'Echo Tags', 'Trust Loop']} />}
    //       </div>

    //       <div
    //         className="relative cursor-pointer"
    //         onMouseEnter={() => setShowDevMenu(true)}
    //         onMouseLeave={() => setShowDevMenu(false)}
    //       >
    //         <span>Developers ▾</span>
    //         {showDevMenu && <Dropdown items={['API Docs', 'Webhooks', 'Integration']} />}
    //       </div>

    //       <Link href="#" className="text-white">Enterprise</Link>
    //       <Link href="#" className="text-white">Pricing</Link>
    //       <Link href="#" className="text-white">Blog</Link>
    //     </nav>

    //     {/* Right Section (desktop only) */}
    //     <div className="hidden lg:flex items-center gap-4">
    //       <select
    //         value={selectedCountry}
    //         onChange={handleCountryChange}
    //         className="bg-[#191919] border border-[#333] rounded-md text-sm px-3 py-1 text-white"
    //       >
    //         <option value="">🌍 Country</option>
    //         {countries.map((c) => (
    //           <option key={c.code} value={c.code}>
    //             {c.flag} {c.name}
    //           </option>
    //         ))}
    //       </select>

    //       <Link
    //         href="/dashboard"
    //         className="bg-[#87e64c] text-black font-semibold text-sm px-4 py-2 rounded-md"
    //       >
    //         Dashboard
    //       </Link>

    //       <Image
    //         src={userImg}
    //         alt="User"
    //         width={32}
    //         height={32}
    //         className="rounded-full bg-[#2a2a2a] p-1"
    //       />
    //     </div>
    //   </div>

    //   {/* Mobile Dropdown Menu */}
    //   {mobileMenuOpen && (
    //     <div className="lg:hidden px-6 pb-4 text-sm space-y-2">
    //       <div className="space-y-1">
    //         <div onClick={() => setShowProductMenu(!showProductMenu)} className="cursor-pointer">
    //           Product ▾
    //         </div>
    //         {showProductMenu && (
    //           <div className="pl-4">
    //             {['EchoScore', 'Echo Tags', 'Trust Loop'].map((item, idx) => (
    //               <Link href="#" key={idx} className="block py-1 text-gray-300">
    //                 {item}
    //               </Link>
    //             ))}
    //           </div>
    //         )}

    //         <div onClick={() => setShowDevMenu(!showDevMenu)} className="cursor-pointer">
    //           Developers ▾
    //         </div>
    //         {showDevMenu && (
    //           <div className="pl-4">
    //             {['API Docs', 'Webhooks', 'Integration'].map((item, idx) => (
    //               <Link href="#" key={idx} className="block py-1 text-gray-300">
    //                 {item}
    //               </Link>
    //             ))}
    //           </div>
    //         )}
    //       </div>

    //       <Link href="#" className="block">Enterprise</Link>
    //       <Link href="#" className="block">Pricing</Link>
    //       <Link href="#" className="block">Blog</Link>

    //       <div className="pt-4 flex flex-col gap-3">
    //         <select
    //           value={selectedCountry}
    //           onChange={handleCountryChange}
    //           className="bg-[#191919] border border-[#333] rounded-md text-sm px-3 py-1 text-white"
    //         >
    //           <option value="">🌍 Country</option>
    //           {countries.map((c) => (
    //             <option key={c.code} value={c.code}>
    //               {c.flag} {c.name}
    //             </option>
    //           ))}
    //         </select>

    //         <Link
    //           href="/dashboard"
    //           className="bg-[#87e64c] text-black font-semibold text-sm px-4 py-2 rounded-md text-center"
    //         >
    //           Dashboard
    //         </Link>
    //       </div>
    //     </div>
    //   )}
    // </header>

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
    // <div className="absolute top-full left-0 mt-2 bg-[#191919] border border-[#333] rounded-md py-2 z-50 min-w-[160px]">
    //   {items.map((item, idx) => (
    //     <Link
    //       href="#"
    //       key={idx}
    //       className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2a2a2a] transition"
    //     >
    //       {item}
    //     </Link>
    //   ))}
    // </div>
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
