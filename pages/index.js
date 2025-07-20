// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [guestName, setGuestName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const slug = guestName
      .trim()
      .toLowerCase()
      .normalize('NFD') // Normalize accented characters
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-'); // Replace spaces with dashes

    if (slug) {
      setLoading(true);
      router.push(`/guest/${slug}`);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>NJOYMENT BBQ 🍗🔥</h1>
      <p style={styles.message}>
        Please enter your name (as it appears on your Partiful profile) and unlock your message for the BBQ this Saturday. If you have a +1, please make sure they read the message you got!.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="guest-name" style={{ display: 'none' }}>Guest Name</label>
        <input
          id="guest-name"
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder="e.g. Oshey Baddest"
          required
          style={styles.input}
        />
        <br />
        <button type="submit" disabled={loading} style={{ 
          ...styles.button, 
          opacity: loading ? 0.7 : 1,
          cursor: loading ? 'not-allowed' : 'pointer',
        }}>
          {loading ? 'Loading...' : 'Continue'}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'white',
    color: 'black',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
    textAlign: 'center',
    padding: '1rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    maxWidth: '600px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    width: '300px',
    border: '1px solid black',
    borderRadius: '4px',
  },
  button: {
    marginTop: '1rem',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
};
