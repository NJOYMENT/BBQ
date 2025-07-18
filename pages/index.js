// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [guestName, setGuestName] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const slug = guestName.trim().toLowerCase().replace(/\s+/g, '-');
    if (slug) {
      router.push(`/guest/${slug}`);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the BBQ Guest Page 🔥</h1>
      <p style={styles.message}>
        Enter your full name to get your personalized message and instructions.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder="e.g. Janay Marie"
          required
          style={styles.input}
        />
        <br />
        <button type="submit" style={styles.button}>Continue</button>
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
    cursor: 'pointer',
    borderRadius: '4px',
  },
};
