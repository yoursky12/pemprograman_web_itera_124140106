import { act, renderHook } from '@testing-library/react';
import { BookProvider, useBooks } from './BookContext.jsx';

const wrapper = ({ children }) => <BookProvider>{children}</BookProvider>;

describe('BookContext', () => {
  beforeEach(() => localStorage.clear());

  it('menambah, mengedit, dan menghapus buku', () => {
    const { result } = renderHook(() => useBooks(), { wrapper });

    act(() => result.current.addBook({ title: 'A', author: 'X', status: 'milik' }));
    expect(result.current.books).toHaveLength(1);

    const id = result.current.books[0].id;
    act(() => result.current.updateBook(id, { title: 'A2' }));
    expect(result.current.books[0].title).toBe('A2');

    act(() => result.current.deleteBook(id));
    expect(result.current.books).toHaveLength(0);
  });

  it('memfilter berdasarkan status dan pencarian', () => {
    const { result } = renderHook(() => useBooks(), { wrapper });
    act(() => {
      result.current.addBook({ title: 'Bumi', author: 'Tere Liye', status: 'milik' });
    });
    act(() => {
      result.current.addBook({ title: 'React', author: 'Dan', status: 'beli' });
    });

    act(() => result.current.setStatusFilter('beli'));
    expect(result.current.filteredBooks).toHaveLength(1);

    act(() => {
      result.current.setStatusFilter('semua');
      result.current.setSearch('tere');
    });
    expect(result.current.filteredBooks[0].title).toBe('Bumi');
  });
});
