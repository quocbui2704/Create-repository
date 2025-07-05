import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiHome, FiUpload, FiMusic, FiBarChart2, FiDollarSign, FiUserPlus, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Sidebar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.role === "admin") {
      setIsAdmin(true);
    }
  }, []);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={styles.sidebar(collapsed)}>
      <div style={styles.header}>
        <img
          src="/logo.png"
          alt="Logo"
          style={collapsed ? styles.logoIconCollapsed : styles.logoIcon}
        />
        {!collapsed && <h3 style={styles.logoText}>SMG</h3>}
      </div>
      <ul style={styles.menu}>
        <li><Link href="/" style={styles.link}><FiHome /> {!collapsed && "Home"}</Link></li>
        <li><Link href="/upload" style={styles.link}><FiUpload /> {!collapsed && "Upload"}</Link></li>
        <li><Link href="/tracks" style={styles.link}><FiMusic /> {!collapsed && "Tracks"}</Link></li>
        <li><Link href="/analytics" style={styles.link}><FiBarChart2 /> {!collapsed && "Analytics"}</Link></li>
        <li><Link href="/paid" style={styles.link}><FiDollarSign /> {!collapsed && "$ Paid"}</Link></li>
        {isAdmin && (
          <li><Link href="/create-user" style={styles.link}><FiUserPlus /> {!collapsed && "Create User"}</Link></li>
        )}
      </ul>
      <div style={styles.footer}>
        <button onClick={toggleCollapse} style={styles.toggleBtn}>
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>
    </div>
  );
}

const styles = {
  sidebar: (collapsed) => ({
    width: collapsed ? '60px' : '200px',
    backgroundColor: collapsed ? 'transparent' : '#111',
    color: 'white',
    padding: '1rem 0.5rem',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backdropFilter: collapsed ? 'blur(10px)' : 'none',
    transition: 'all 0.3s ease',
    borderRight: '1px solid rgba(255,255,255,0.1)',
    borderRadius: collapsed ? '15px' : '20px', // Bo góc sidebar
    overflow: 'hidden',
  }),
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem',
    flexDirection: 'column',
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    marginBottom: '0.5rem',
    borderRadius: '12px', // Bo góc logo khi sidebar mở
  },
  logoIconCollapsed: {
    width: '40px',
    height: '40px',
    borderRadius: '12px', // Bo góc logo khi sidebar thu gọn
  },
  logoText: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    padding: '0.7rem 1rem',
    borderRadius: '12px', // Bo góc cho các link
    fontFamily: 'Poppins, sans-serif',
    transition: 'background 0.2s',
  },
  footer: {
    textAlign: 'center',
    paddingBottom: '1rem',
  },
  toggleBtn: {
    background: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.5rem',
    borderRadius: '50%', // Bo tròn nút thu gọn
    transition: 'background 0.2s',
  },
};
