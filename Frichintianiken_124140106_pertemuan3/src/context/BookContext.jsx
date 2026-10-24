import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage.js';

const BookContext = createContext(null);

// Provider: menyimpan seluruh state global (buku, filter, pencarian)
export function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage('books', []);
  const [statusFilter, setStatusFilter] = useState('semua');
  const [search, setSearch] = useState('');

  const addBook = useCallback(
    (data) => setBooks((prev) => [...prev, { ...data, id: Date.now().toString() }]),
    [setBooks]
  );

  const updateBook = useCallback(
    (id, data) => setBooks((prev) => prev.map((b) => (b.id === id ? { ...b, ...data } : b))),
    [setBooks]
  );

  const deleteBook = useCallback(
    (id) => setBooks((prev) => prev.filter((b) => b.id !== id)),
    [setBooks]
  );

  // Hasil akhir: filter status + pencarian judul/penulis
  const filteredBooks = useMemo(() => {
    const q = search.trim().toLowerCase();
    return books.filter((b) => {
      const matchStatus = statusFilter === 'semua' || b.status === statusFilter;
      const matchSearch =
        q === '' || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
      return matchStatus && matchSearch;
    });
  }, [books, statusFilter, search]);

  const value = {
    books, filteredBooks, statusFilter, search,
    setStatusFilter, setSearch, addBook, updateBook, deleteBook,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
}

BookProvider.propTypes = { children: PropTypes.node.isRequired };

// Hook konsumsi context
// eslint-disable-next-line react-refresh/only-export-components
export function useBooks() {
  const ctx = useContext(BookContext);
  if (!ctx) throw new Error('useBooks harus dipakai di dalam <BookProvider>');
  return ctx;
}
