import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formatted = name.trim().toLowerCase().replace(/\s+/g, '-')
    router.push(`/guest/${formatted}`)
  }

  return (
    <main style={{ padding: 40, textAlign: 'center' }}>
      <h1>Welcome to the BBQ Guest List 🔥</h1>
      <p>Enter your full name to see your personalized instructions:</p>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Janay Marie"
          style={{ padding: 10, width: '60%', marginBottom: 10 }}
        />
        <br />
        <button type="submit" style={{ padding: 10 }}>Continue</button>
      </form>
    </main>
  )
}
