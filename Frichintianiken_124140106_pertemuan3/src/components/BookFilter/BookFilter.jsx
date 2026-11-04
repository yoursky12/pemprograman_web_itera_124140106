import PropTypes from 'prop-types';
import './BookFilter.css';

const OPTIONS = [
  { value: 'semua', label: 'Semua' },
  { value: 'milik', label: 'Milik' },
  { value: 'baca', label: 'Dibaca' },
  { value: 'beli', label: 'Dibeli' },
];

// Komponen reusable #2: pencarian + filter status
export default function BookFilter({ status, search, onStatusChange, onSearchChange }) {
  return (
    <div className="book-filter">
      <input
        type="search" aria-label="Cari buku" placeholder="Cari judul atau penulis..."
        value={search} onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="tabs" role="group" aria-label="Filter status">
        {OPTIONS.map((o) => (
          <button
            key={o.value} type="button"
            className={`tab ${status === o.value ? 'active' : ''}`}
            aria-pressed={status === o.value}
            onClick={() => onStatusChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

BookFilter.propTypes = {
  status: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};
