import Sidebar from '../../components/Sidebar';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{
        marginLeft: '220px',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
      }}>
        <img src="/logo.png" alt="SOUL MUSIC GROUP logo" width={100} style={{ marginBottom: '1rem' }} />
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome to SOUL MUSIC GROUP</h1>
        <p>Music Distribution</p>
      </main>
    </div>
  );
}
