import Sidebar from "../../components/Sidebar";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

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
        <button style={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </main>
    </div>
  );
}

const styles = {
  logoutButton: {
    marginTop: "1rem",
    padding: "0.7rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
