'use client'

import { useState } from 'react'

const initialReviews = [
  {
    id: 1,
    user: 'Aya S.',
    echo: '❤️ Loved Echo',
    text: 'Honestly the best burger I’ve had in Amman. Thank you!',
    date: '2025-06-12T14:30:00Z',
    replied: false,
    reply: '',
    isStarred: false,
    perkSent: false,
  },
  {
    id: 2,
    user: 'Zaid I.',
    echo: '💔 Broken Echo',
    text: 'Late delivery and cold fries. Not happy.',
    date: '2025-06-10T10:00:00Z',
    replied: true,
    reply: 'We’re sorry about that. Please DM us and we’ll fix it.',
    isStarred: true,
    perkSent: true,
  },
]

export default function PublicReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews)

  const handleReply = (id: number, text: string) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, replied: true, reply: text } : r
      )
    )
  }

  const toggleStar = (id: number) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, isStarred: !r.isStarred } : r
      )
    )
  }

  const togglePerk = (id: number) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, perkSent: !r.perkSent } : r
      )
    )
  }

  return (
    <div>
      <h1 style={{ fontSize: '24px', marginBottom: '24px' }}>📝 Public Reviews</h1>

      {reviews.map((review) => (
        <div
          key={review.id}
          style={{
            backgroundColor: '#191919',
            border: '1px solid #333',
            padding: '16px',
            borderRadius: '12px',
            marginBottom: '20px',
          }}
        >
          <div style={{ fontSize: '14px', color: '#888' }}>
            {new Date(review.date).toLocaleDateString()} by {review.user}
          </div>

          <div style={{ fontSize: '18px', margin: '8px 0' }}>{review.echo}</div>
          <p style={{ color: '#ccc', marginBottom: '12px' }}>{review.text}</p>

          {!review.replied ? (
            <ReplyBox onSubmit={(text) => handleReply(review.id, text)} />
          ) : (
            <>
              <div style={{ color: '#87e64c' }}>
                💬 <strong>Your reply:</strong> {review.reply}
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <button
                  onClick={() => toggleStar(review.id)}
                  style={{
                    ...actionButton,
                    backgroundColor: review.isStarred ? '#facc15' : '#191919',
                    color: review.isStarred ? '#000' : '#facc15',
                  }}
                >
                  ⭐ {review.isStarred ? 'Starred' : 'Star Reviewer'}
                </button>

                <button
                  onClick={() => togglePerk(review.id)}
                  style={{
                    ...actionButton,
                    backgroundColor: review.perkSent ? '#34d399' : '#191919',
                    color: review.perkSent ? '#000' : '#34d399',
                  }}
                >
                  🎁 {review.perkSent ? 'Perk Sent' : 'Send Perk'}
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

// ReplyBox Component
function ReplyBox({ onSubmit }: { onSubmit: (text: string) => void }) {
  const [text, setText] = useState('')

  return (
    <div style={{ marginTop: '12px' }}>
      <textarea
        placeholder="Write your reply..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: '#0e0e0e',
          border: '1px solid #444',
          color: 'white',
        }}
      />
      <button
        onClick={() => {
          if (text.trim()) {
            onSubmit(text)
            setText('')
          }
        }}
        style={{
          marginTop: '8px',
          backgroundColor: '#87e64c',
          border: 'none',
          padding: '8px 14px',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
          color: '#000',
        }}
      >
        Reply
      </button>
    </div>
  )
}

// Reusable Button Style
const actionButton: React.CSSProperties = {
  border: '1px solid #444',
  padding: '8px 12px',
  borderRadius: '6px',
  fontWeight: 'bold',
  backgroundColor: '#191919',
  color: '#ccc',
  cursor: 'pointer',
}
