'use client'
import React from 'react'

interface ReviewCardProps {
  reviewerName: string
  reviewerImage: string
  echoTag?: string
  echoLabel: string
  reviewText: string
  businessName: string
  businessLogo?: string
  businessDomain?: string
  isVerified: boolean
  item?: string
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  reviewerName,
  reviewerImage,
  echoTag,
  echoLabel,
  reviewText,
  businessName,
  businessLogo,
  businessDomain,
  isVerified,
  item,
}) => {
  return (
    <div style={cardContainer}>
      {/* Reviewer Info */}
      <div style={header}>
        <img src={reviewerImage} alt={reviewerName} style={avatar} />
        <div style={info}>
          <strong style={name}>{reviewerName}</strong>
          <div style={echoStyle}>
            {echoTag} <span style={echoLabelStyle}>{echoLabel}</span>
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p style={reviewTextStyle}>
        {reviewText.length > 140 ? reviewText.slice(0, 140) + '…' : reviewText}
      </p>

      {/* Item Tag (optional) */}
      {item && (
        <div style={itemTag}>
          🔖 <span style={{ fontStyle: 'italic', color: '#bbb' }}>{item}</span>
        </div>
      )}

      {/* Business Info */}
      <div style={footer}>
        {isVerified ? (
          <>
            <img src={businessLogo} alt={businessName} style={bizLogo} />
            <div>
              <div style={bizName}>
                {businessName}
                <span style={{ color: '#4ade80', fontSize: '16px', marginLeft: '6px' }}>✔️</span>
              </div>
              <a
                href={`https://${businessDomain}`}
                target="_blank"
                rel="noopener noreferrer"
                style={bizDomain}
              >
                {businessDomain}
              </a>
            </div>
          </>
        ) : (
          <>
            <div style={unclaimedIcon}>?</div>
            <div>
              <div style={bizName}>{businessName}</div>
              <div style={unclaimedLabel}>Unclaimed Business</div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ReviewCard

/* === Styles === */
const cardContainer: React.CSSProperties = {
  backgroundColor: '#191919',
  color: 'white',
  borderRadius: '16px',
  padding: '20px',
  width: '100%',
  maxWidth: '360px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: '1px solid #2e2e2e',
  gap: '16px',
}

const header: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
}

const avatar: React.CSSProperties = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: '12px',
}

const info: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
}

const name: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: 600,
  color: '#fff',
}

const echoStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  gap: '6px',
  color: '#f87171',
}

const echoLabelStyle: React.CSSProperties = {
  fontWeight: 500,
  color: '#ccc',
}

const reviewTextStyle: React.CSSProperties = {
  fontSize: '15px',
  color: '#ccc',
  lineHeight: 1.5,
}

const itemTag: React.CSSProperties = {
  backgroundColor: '#121212',
  padding: '6px 10px',
  borderRadius: '8px',
  fontSize: '13px',
  fontWeight: 500,
  color: '#ccc',
  alignSelf: 'flex-start',
  border: '1px solid #2e2e2e',
}

const footer: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}

const bizLogo: React.CSSProperties = {
  width: '36px',
  height: '36px',
  objectFit: 'contain',
  borderRadius: '6px',
  backgroundColor: '#fff',
}

const bizName: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: 500,
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
}

const bizDomain: React.CSSProperties = {
  fontSize: '13px',
  color: '#888',
  textDecoration: 'none',
}

/* Unclaimed */
const unclaimedIcon: React.CSSProperties = {
  width: '36px',
  height: '36px',
  borderRadius: '6px',
  backgroundColor: '#2e2e2e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
  fontWeight: 700,
  color: '#888',
}

const unclaimedLabel: React.CSSProperties = {
  fontSize: '13px',
  color: '#777',
  fontStyle: 'italic',
}
