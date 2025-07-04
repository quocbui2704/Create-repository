import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Paid() {
  const router = useRouter();

  useEffect(() => {
    // Giữ trang khi truy cập trực tiếp hoặc qua sidebar
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Royalty Summary</h1>

      <div style={styles.summaryBox}>
        <p>Current Balance: $0.00</p>
        <button style={styles.button}>Request Payment</button>
      </div>

      <div style={styles.cards}>
        {['APR-25', 'MAR-25', 'FEB-25', 'JAN-25'].map((period, i) => (
          <div key={i} style={styles.card}>
            <h3>{period}</h3>
            <p>Opening Balance: $0.00</p>
            <p>Earnings: $0.00</p>
            <p>Adjustments: $0.00</p>
            <p>Payments: $0.00</p>
            <p>Outstanding Balance: $0.00</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
  },
  title: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  summaryBox: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  button: {
    marginTop: '1rem',
    padding: '0.7rem 1.5rem',
    fontWeight: 'bold',
    border: 'none',
    backgroundColor: '#3498db',
    color: 'white',
    cursor: 'pointer',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#222',
    padding: '1rem',
    borderRadius: '8px',
    width: '200px',
  },
};
