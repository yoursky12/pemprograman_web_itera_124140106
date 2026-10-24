import { renderHook } from '@testing-library/react';
import useBookStats from './useBookStats.js';

describe('useBookStats', () => {
  it('menghitung total dan jumlah per status', () => {
    const books = [
      { id: '1', title: 'A', author: 'X', status: 'milik' },
      { id: '2', title: 'B', author: 'Y', status: 'baca' },
      { id: '3', title: 'C', author: 'Z', status: 'baca' },
      { id: '4', title: 'D', author: 'W', status: 'beli' },
    ];
    const { result } = renderHook(() => useBookStats(books));
    expect(result.current).toEqual({ total: 4, milik: 1, baca: 2, beli: 1 });
  });

  it('mengembalikan nol saat daftar kosong', () => {
    const { result } = renderHook(() => useBookStats([]));
    expect(result.current.total).toBe(0);
  });
});
