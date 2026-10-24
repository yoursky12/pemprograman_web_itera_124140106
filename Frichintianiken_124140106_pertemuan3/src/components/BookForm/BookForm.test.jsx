import { fireEvent, render, screen } from '@testing-library/react';
import BookForm from './BookForm.jsx';

describe('BookForm', () => {
  it('menampilkan pesan error saat kolom kosong', () => {
    const onSubmit = vi.fn();
    render(<BookForm onSubmit={onSubmit} />);
    fireEvent.click(screen.getByRole('button', { name: /tambah buku/i }));
    expect(screen.getByText('Judul wajib diisi')).toBeInTheDocument();
    expect(screen.getByText('Penulis wajib diisi')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('memberi kelas visual "invalid" pada input kosong', () => {
    render(<BookForm onSubmit={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: /tambah buku/i }));
    expect(screen.getByLabelText('Judul')).toHaveClass('invalid');
  });

  it('memanggil onSubmit dengan data valid', () => {
    const onSubmit = vi.fn();
    render(<BookForm onSubmit={onSubmit} />);
    fireEvent.change(screen.getByLabelText('Judul'), { target: { value: 'Laskar Pelangi' } });
    fireEvent.change(screen.getByLabelText('Penulis'), { target: { value: 'Andrea Hirata' } });
    fireEvent.change(screen.getByLabelText('Status'), { target: { value: 'baca' } });
    fireEvent.click(screen.getByRole('button', { name: /tambah buku/i }));
    expect(onSubmit).toHaveBeenCalledWith({
      title: 'Laskar Pelangi', author: 'Andrea Hirata', status: 'baca',
    });
  });
});
