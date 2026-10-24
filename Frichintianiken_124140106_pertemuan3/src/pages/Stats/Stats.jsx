import useBookStats from '../../hooks/useBookStats.js';
import { useBooks } from '../../context/BookContext.jsx';
import './Stats.css';

// Halaman statistik: memakai custom hook useBookStats
export default function Stats() {
  const { books } = useBooks();
  const stats = useBookStats(books);

  const items = [
    { label: 'Total buku', value: stats.total },
    { label: 'Dimiliki', value: stats.milik },
    { label: 'Ingin Dibeli', value: stats.beli },
  ];

  return (
    <main>
      <h2 className="section-title">Statistik</h2>
      <div className="stats-grid">
        {items.map((i) => (
          <div className="stat" key={i.label}>
            <span className="stat-value">{i.value}</span>
            <span className="stat-label">{i.label}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
