// pages/guest/[name].js
import { useRouter } from 'next/router';
import guestData from '../../data/guests.json'; // adjust path if different

export default function GuestPage() {
  const router = useRouter();
  const { name } = router.query;

  if (!name) return <p>Loading...</p>;

  const guest = guestData[name.toLowerCase()];

  if (!guest) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Guest not found 😢</h1>
        <p style={styles.text}>Please check the name you entered and try again.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hi {guest.displayName},</h1>
      <p style={styles.text}>
        Thanks for getting this far and listing your name down. Please make sure you read all the information below and if you have any questions give us a shout!
      </p>
      <p style={styles.text}>{guest.message}</p>
      <p style={styles.text}>
        <strong>DIETARY REQUIREMENTS:</strong><br />
        For anyone bringing food, please ensure to list anything with (egg, nuts or fish in it) — we have multiple people attending with allergies.
      </p>
      <p style={styles.text}>
        <strong>DIETARY REQUESTS:</strong><br />
        If you have requested either no pork, no fish or have an allergy, please make sure NJ, Hillary or Renee know as soon as you arrive to ensure you get something to eat. (Heads up!) We won’t be able to do much if you arrive too late!
      </p>
      <p style={styles.text}>Thanks soo much and see you soon!</p>
      <p style={styles.text}>The full address will be listed 24 hrs to the event and the closest station is Norbury Station!</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '700px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
    lineHeight: '1.6',
  },
};
