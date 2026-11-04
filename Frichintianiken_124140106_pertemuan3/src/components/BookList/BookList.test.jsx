import { fireEvent, render, screen } from '@testing-library/react';
import BookList from './BookList.jsx';

const books = [{ id: '1', title: 'Bumi', author: 'Tere Liye', status: 'milik' }];

describe('BookList', () => {
  it('menampilkan pesan kosong jika tidak ada buku', () => {
    render(<BookList books={[]} onEdit={() => {}} onDelete={() => {}} />);
    expect(screen.getByText(/belum ada buku/i)).toBeInTheDocument();
  });

  it('merender judul dan penulis buku', () => {
    render(<BookList books={books} onEdit={() => {}} onDelete={() => {}} />);
    expect(screen.getByText('Bumi')).toBeInTheDocument();
    expect(screen.getByText('Tere Liye')).toBeInTheDocument();
  });

  it('memanggil onDelete dengan id buku', () => {
    const onDelete = vi.fn();
    render(<BookList books={books} onEdit={() => {}} onDelete={onDelete} />);
    fireEvent.click(screen.getByRole('button', { name: 'Hapus' }));
    expect(onDelete).toHaveBeenCalledWith('1');
  });
});
