// pages/guest/[slug].js
import { useRouter } from 'next/router';

export default function GuestPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Convert slug to name for display
  const displayName = slug?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hey {displayName} 👋</h1>
      <p style={styles.message}>
        Thanks for RSVPing! We’re excited to see what you’re bringing to the BBQ 🍗🔥
      </p>

      {/* ✅ Back to Home button */}
      <button
        onClick={() => router.push('/')}
        style={styles.button}
      >
        Back to Home
      </button>
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
    padding: '1rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    maxWidth: '600px',
  },
  button: {
    marginTop: '2rem',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
