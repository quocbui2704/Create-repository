import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.role === "admin") {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div style={styles.sidebar}>
      <h3 style={styles.header}>Dashboard</h3>
      <ul style={styles.menu}>
        <li><Link href="/" style={styles.link}>Home</Link></li>
        <li><Link href="/upload" style={styles.link}>Upload</Link></li>
        <li><Link href="/tracks" style={styles.link}>Tracks</Link></li>
        <li><Link href="/analytics" style={styles.link}>Analytics</Link></li>
        <li><Link href="/paid" style={styles.link}>$ Paid</Link></li>
        {isAdmin && (
          <li><Link href="/create-user" style={styles.link}>Create User</Link></li>
        )}
      </ul>
      <div style={styles.logoContainer}>
        <img src="/logo.png" alt="Logo" style={styles.logo} />
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: '200px',
    backgroundColor: '#111',
    color: 'white',
    padding: '1rem',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    fontFamily: 'Poppins, sans-serif',
    marginBottom: '2rem',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    padding: '0.5rem 0',
    fontFamily: 'Poppins, sans-serif',
  },
  logoContainer: {
    textAlign: 'center',
    marginTop: 'auto',
    paddingBottom: '1rem',
  },
  logo: {
    width: '60px',
    height: 'auto',
  },
};
