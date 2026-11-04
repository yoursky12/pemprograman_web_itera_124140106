import PropTypes from 'prop-types';
import './BookList.css';

const LABEL = { milik: 'Milik', baca: 'Sedang dibaca', beli: 'Ingin dibeli' };

const bookShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['milik', 'baca', 'beli']).isRequired,
});

// Komponen reusable #3: satu baris buku
function BookItem({ book, onEdit, onDelete }) {
  return (
    <li className="book-item">
      <div className="info">
        <strong>{book.title}</strong>
        <span className="author">{book.author}</span>
        <span className="badge">{LABEL[book.status]}</span>
      </div>
      <div className="item-actions">
        <button type="button" className="ghost" onClick={() => onEdit(book)}>Edit</button>
        <button type="button" className="danger" onClick={() => onDelete(book.id)}>Hapus</button>
      </div>
    </li>
  );
}

BookItem.propTypes = {
  book: bookShape.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

// Komponen reusable: daftar buku (menampilkan empty state jika kosong)
export default function BookList({ books, onEdit, onDelete }) {
  if (books.length === 0) {
    return <p className="empty">Belum ada buku yang cocok.</p>;
  }
  return (
    <ul className="book-list">
      {books.map((b) => (
        <BookItem key={b.id} book={b} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(bookShape).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
