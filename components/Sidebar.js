import Link from 'next/link';

export default function Sidebar() {
  return (
    <div style={{ width: '200px', backgroundColor: '#111', color: 'white', padding: '1rem', minHeight: '100vh' }}>
      <h3>Dashboard</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link href="/upload" style={{ color: 'white', textDecoration: 'none' }}>Upload</Link></li>
        <li><Link href="/tracks" style={{ color: 'white', textDecoration: 'none' }}>Tracks</Link></li>
        <li><Link href="/analytics" style={{ color: 'white', textDecoration: 'none' }}>Analytics</Link></li>
        <li><Link href="/paid" style={{ color: 'white', textDecoration: 'none' }}>$ Paid</Link></li>
      </ul>
    </div>
  );
}
