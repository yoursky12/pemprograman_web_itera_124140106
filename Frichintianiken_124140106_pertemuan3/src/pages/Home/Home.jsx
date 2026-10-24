import { useState } from 'react';
import BookForm from '../../components/BookForm/BookForm.jsx';
import BookFilter from '../../components/BookFilter/BookFilter.jsx';
import BookList from '../../components/BookList/BookList.jsx';
import { useBooks } from '../../context/BookContext.jsx';
import './Home.css';

// Halaman utama: form + filter + daftar buku
export default function Home() {
  const {
    filteredBooks, statusFilter, search,
    setStatusFilter, setSearch, addBook, updateBook, deleteBook,
  } = useBooks();
  const [editing, setEditing] = useState(null); // buku yang sedang diedit

  const handleSubmit = (data) => {
    if (editing) {
      updateBook(editing.id, data);
      setEditing(null);
    } else {
      addBook(data);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Hapus buku ini?')) {
      deleteBook(id);
      if (editing?.id === id) setEditing(null);
    }
  };

  return (
    <main>
      <h2 className="section-title">{editing ? 'Edit buku' : 'Tambah buku'}</h2>
      <BookForm
        initialData={editing}
        onSubmit={handleSubmit}
        onCancel={editing ? () => setEditing(null) : undefined}
      />

      <h2 className="section-title">Koleksi</h2>
      <BookFilter
        status={statusFilter} search={search}
        onStatusChange={setStatusFilter} onSearchChange={setSearch}
      />
      <BookList books={filteredBooks} onEdit={setEditing} onDelete={handleDelete} />
    </main>
  );
}
