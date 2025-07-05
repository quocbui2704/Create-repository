import Sidebar from '../../components/Sidebar';

export default function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.main}>
        <video
          autoPlay
          muted
          loop
          style={styles.video}
        >
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={styles.overlay}>
          <h1 style={styles.title}>Welcome to SOUL MUSIC GROUP</h1>
          <p style={styles.subtitle}>Music Distribution</p>
          <button style={styles.button} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
  main: {
    position: 'relative',
    flexGrow: 1,
    height: '100vh',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    top: 0,
    left: 0,
    zIndex: 0,
    filter: 'brightness(0.4)', // Làm tối video cho text rõ hơn
  },
  overlay: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 2rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.7rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};
