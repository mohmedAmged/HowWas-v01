'use client'

export default function HowwazPricing() {
  const plans = [
    {
      name: 'Verified',
      price: 19,
      originalPrice: 29,
      target: 'Small/local businesses',
      features: [
        'Basic profile',
        'EchoScore badge',
        '3 review replies/month',
        '5 product tags',
      ],
    },
    {
      name: 'Growth',
      price: 49,
      originalPrice: 99,
      target: 'DTC brands, tech SMBs',
      features: [
        'Custom branding',
        'Echo insights',
        '20 replies/month',
        'Analytics dashboard',
        'Access to Perks',
      ],
    },
    {
      name: 'Credible+',
      price: 249,
      originalPrice: 499,
      target: 'Global & B2B platforms',
      features: [
        'Full analytics suite',
        'Up to 5 users',
        'API access',
        'Featured Trust Badge',
        'Global profile boost',
      ],
    },
  ]

  return (
    <main style={wrapper}>
      <h1 style={title}>Pricing Plans</h1>
      <p style={subtitle}>
        Early adopters get <span style={{ color: '#87e64c' }}>50% off</span> — locked in for 1 year 🎉
      </p>

      <div style={grid}>
        {plans.map((plan) => (
          <div key={plan.name} style={card}>
            <h2 style={planName}>{plan.name}</h2>
            <p style={planTarget}>{plan.target}</p>

            <div style={priceWrapper}>
              <span style={price}>${plan.price}</span>
              <span style={oldPrice}>${plan.originalPrice}</span>
              <span style={perMonth}>/month</span>
            </div>

            <ul style={featuresList}>
              {plan.features.map((feature, i) => (
                <li key={i} style={featureItem}>✅ {feature}</li>
              ))}
            </ul>

            <button style={button}>Start with {plan.name}</button>
          </div>
        ))}
      </div>
    </main>
  )
}

// === Styles ===
const wrapper: React.CSSProperties = {
  backgroundColor: '#0e0e0e',
  color: '#fff',
  padding: '60px 24px',
  fontFamily: 'Inter, sans-serif',
  maxWidth: '1200px',
  margin: '0 auto',
}

const title = {
  fontSize: '32px',
  fontWeight: 700,
  textAlign: 'center' as const,
  marginBottom: '8px',
}

const subtitle = {
  textAlign: 'center' as const,
  color: '#ccc',
  marginBottom: '48px',
  fontSize: '16px',
}

const grid = {
  display: 'grid',
  gap: '32px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
}

const card = {
  backgroundColor: '#191919',
  border: '1px solid #333',
  borderRadius: '12px',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'space-between',
}

const planName = {
  fontSize: '20px',
  fontWeight: 700,
  marginBottom: '6px',
}

const planTarget = {
  fontSize: '14px',
  color: '#aaa',
  marginBottom: '20px',
}

const priceWrapper = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '12px',
  marginBottom: '20px',
}

const price = {
  fontSize: '28px',
  fontWeight: 700,
  color: '#87e64c',
}

const oldPrice = {
  textDecoration: 'line-through',
  color: '#666',
  fontSize: '16px',
}

const perMonth = {
  fontSize: '14px',
  color: '#aaa',
}

const featuresList = {
  listStyle: 'none',
  padding: 0,
  marginBottom: '24px',
  fontSize: '14px',
  color: '#ddd',
}

const featureItem = {
  marginBottom: '10px',
}

const button = {
  backgroundColor: '#87e64c',
  color: '#000',
  fontWeight: 600,
  border: 'none',
  padding: '12px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '15px',
}
