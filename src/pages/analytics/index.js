import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Analytics() {
  const chartData = {
    labels: ['24-Jun', '25-Jun', '26-Jun', '27-Jun', '28-Jun', '29-Jun', '30-Jun'],
    datasets: [{
      label: 'Total Streams',
      data: [0, 0, 0, 0, 0, 0, 0],
      fill: true,
      borderColor: '#e74c3c',
      backgroundColor: 'rgba(231, 76, 60, 0.2)',
      tension: 0.4,
    }],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: { ticks: { color: 'white' }, grid: { color: '#444' } },
      y: { ticks: { color: 'white' }, grid: { color: '#444' } },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Stream Analytics</h1>

      <div style={styles.row}>
        <div style={styles.sidebar}>
          {['YouTube Art Tracks', 'Spotify', 'Apple Music', 'Amazon', 'Pandora', 'Deezer'].map((platform, i) => (
            <div key={i} style={styles.metric}>
              <p style={styles.metricName}>{platform}</p>
              <p style={styles.metricValue}>Streams: 0</p>
            </div>
          ))}
        </div>

        <div style={styles.chartArea}>
          <p style={styles.total}>Total Streams: 0</p>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
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
  row: {
    display: 'flex',
    gap: '2rem',
  },
  sidebar: {
    flex: '0 0 200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  metric: {
    backgroundColor: '#222',
    padding: '1rem',
    borderRadius: '8px',
  },
  metricName: {
    fontWeight: 'bold',
  },
  metricValue: {
    fontSize: '1rem',
    marginTop: '0.3rem',
  },
  chartArea: {
    flex: 1,
  },
  total: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
};
