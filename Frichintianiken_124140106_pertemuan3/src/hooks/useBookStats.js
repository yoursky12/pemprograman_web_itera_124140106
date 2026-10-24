import { useMemo } from 'react';

/**
 * Custom hook #2: menghitung statistik dari daftar buku.
 * useMemo dipakai agar hitungan hanya diulang saat `books` berubah.
 */
export default function useBookStats(books) {
  return useMemo(() => {
    const stats = { total: books.length, milik: 0, baca: 0, beli: 0 };
    books.forEach((b) => {
      if (stats[b.status] !== undefined) stats[b.status] += 1;
    });
    return stats;
  }, [books]);
}
