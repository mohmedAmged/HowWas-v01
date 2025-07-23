import React from 'react'

interface RedesignedBrandCardProps {
  name: string
  description: string
  logoUrl: string
  echoes: {
    handshake?: number
    loved?: number
    adored?: number
    broken?: number
  }
}

export default function RedesignedBrandCard({
  name,
  description,
  logoUrl,
  echoes = {},
}: RedesignedBrandCardProps) {
  return (
    <div style={cardStyle}>
      {/* Main Content */}
      <div style={contentStyle}>
        {/* Logo */}
        <img src={logoUrl} alt={name} style={logoStyle} />

        {/* Textual Content */}
        <div style={textStyle}>
          <h3 style={titleStyle}>{name}</h3>
          <p style={descStyle}>{description}</p>
        </div>
      </div>

      {/* Bottom Echo Stats */}
      <div style={footerStyle}>
        <span style={footerItem}>🤝 {echoes.handshake ?? 0}</span>
        <span style={footerItem}>❤️ {echoes.loved ?? 0}</span>
        <span style={footerItem}>💜 {echoes.adored ?? 0}</span>
        <span style={footerItem}>💔 {echoes.broken ?? 0}</span>
      </div>
    </div>
  )
}

/* === Styles === */

const cardStyle: React.CSSProperties = {
  backgroundColor: '#191919',
  border: '1px solid #2a2a2a',
  borderRadius: '12px',
  color: 'white',
  padding: '20px',
  width: '100%',
  maxWidth: '400px',
  boxShadow: '0 0 0 1px #222',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '16px',
  position: 'relative',
}

const contentStyle: React.CSSProperties = {
  display: 'flex',
  gap: '16px',
  alignItems: 'flex-start',
}

const logoStyle: React.CSSProperties = {
  width: '48px',
  height: '48px',
  borderRadius: '8px',
  objectFit: 'cover',
  backgroundColor: '#000',
  flexShrink: 0,
}

const textStyle: React.CSSProperties = {
  flex: 1,
  overflow: 'hidden',
}

const titleStyle: React.CSSProperties = {
  fontSize: '16px',
  fontWeight: 600,
  margin: 0,
  marginBottom: '6px',
  color: 'white',
}

const descStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#bbb',
  margin: 0,
  lineHeight: 1.4,
  wordBreak: 'break-word',
}

const footerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '16px',
  backgroundColor: '#121212',
  padding: '8px 12px',
  borderRadius: '8px',
  fontSize: '13px',
  color: '#ccc',
}

const footerItem: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
}
