'use client'

import { useState } from 'react'

export default function AddItemPage() {
  const [categories, setCategories] = useState(['Burgers', 'Wraps', 'Sides'])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [itemName, setItemName] = useState('')
  const [availability, setAvailability] = useState<string>('available')

  const handleSubmit = () => {
    const finalCategory = selectedCategory === 'new' ? newCategory.trim() : selectedCategory

    if (!itemName || !finalCategory) {
      alert('Please fill all required fields.')
      return
    }

    const newItem = {
      name: itemName,
      category: finalCategory,
      availability,
    }

    console.log('✅ Item Submitted:', newItem)

    if (selectedCategory === 'new' && newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory])
    }

    // Reset
    setItemName('')
    setSelectedCategory('')
    setNewCategory('')
    setAvailability('available')
  }

  return (
    <main style={{ padding: '24px', color: 'white', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '24px' }}>➕ Add New Item</h1>

      {/* Item Name */}
      <div style={field}>
        <label style={label}>Item Name</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="e.g. Spicy Chicken Burger"
          style={input}
        />
      </div>

      {/* Category */}
      <div style={field}>
        <label style={label}>Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={input}
        >
          <option value="">-- Select Category --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
          <option value="new">➕ Add New Category</option>
        </select>

        {selectedCategory === 'new' && (
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Enter new category"
            style={{ ...input, marginTop: '8px' }}
          />
        )}
      </div>

      {/* Availability */}
      <div style={field}>
        <label style={label}>Availability</label>
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value as string)}
          style={input}
        >
          <option value="available">✅ Available</option>
          <option value="coming soon">🕒 Coming Soon</option>
          <option value="unavailable">❌ Unavailable</option>
        </select>
      </div>

      <button onClick={handleSubmit} style={submitBtn}>Save Item</button>
    </main>
  )
}

/* === Styles === */
const field: React.CSSProperties = {
  marginBottom: '20px',
}

const label: React.CSSProperties = {
  display: 'block',
  marginBottom: '6px',
  fontSize: '14px',
  fontWeight: 500,
  color: '#ccc',
}

const input: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  backgroundColor: '#191919',
  border: '1px solid #333',
  borderRadius: '8px',
  fontSize: '14px',
  color: '#fff',
}

const submitBtn: React.CSSProperties = {
  padding: '12px 20px',
  backgroundColor: '#87e64c',
  color: 'black',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: '15px',
}
