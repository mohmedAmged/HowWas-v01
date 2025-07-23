import React from 'react'

export default function CountryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0f0f0f', color: 'white', margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
