'use client'

export default function WhyHowwaz() {
  const brandBenefits = [
    { title: 'Earn Public Trust', desc: 'Stand out with a verified profile, EchoScore, and real interactions.' },
    { title: 'Own Your Narrative', desc: 'Respond to reviews, highlight values, and turn feedback into reputation.' },
    { title: 'Boost Visibility', desc: 'Get discovered through authentic echoes, not paid ads or fake followers.' },
  ]

  const userBenefits = [
    { title: 'Trust Before You Try', desc: 'See real, evolving experiences from real people — not just star ratings.' },
    { title: 'Echo Honestly', desc: 'Leave reviews that carry weight — with proof, emotion, and visibility.' },
    { title: 'Shape Public Credibility', desc: 'Your voice influences how businesses grow and behave.' },
  ]

  return (
    <main style={wrapper}>
      <h1 style={title}>Why Howwaz?</h1>
      <p style={subtitle}>We’re redefining public credibility — not just for brands, but for people too.</p>

      {/* Brands Section */}
      <section style={section}>
        <h2 style={sectionHeading}>For Brands</h2>
        <div style={grid}>
          {brandBenefits.map((b, i) => (
            <div key={i} style={box}>
              <div style={emoji}>🏢</div>
              <h3 style={boxTitle}>{b.title}</h3>
              <p style={boxDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Users Section */}
      <section style={{ ...section, marginTop: '60px' }}>
        <h2 style={sectionHeading}>For Users</h2>
        <div style={grid}>
          {userBenefits.map((b, i) => (
            <div key={i} style={box}>
              <div style={emoji}>🧑‍💻</div>
              <h3 style={boxTitle}>{b.title}</h3>
              <p style={boxDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

// === Styles ===
const wrapper = {
  backgroundColor: '#0e0e0e',
  color: '#fff',
  padding: '80px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
  fontFamily: 'Inter, sans-serif',
}

const title = {
  fontSize: '32px',
  fontWeight: 700,
  textAlign: 'center' as const,
  marginBottom: '8px',
}

const subtitle = {
  textAlign: 'center' as const,
  color: '#aaa',
  fontSize: '16px',
  marginBottom: '48px',
}

const section = {
  marginBottom: '40px',
}

const sectionHeading = {
  fontSize: '22px',
  fontWeight: 700,
  marginBottom: '24px',
}

const grid = {
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
}

const box = {
  backgroundColor: '#191919',
  padding: '24px',
  borderRadius: '12px',
  border: '1px solid #333',
}

const emoji = {
  fontSize: '24px',
  marginBottom: '12px',
}

const boxTitle = {
  fontSize: '16px',
  fontWeight: 600,
  marginBottom: '6px',
}

const boxDesc = {
  fontSize: '14px',
  color: '#ccc',
  lineHeight: 1.6,
}
