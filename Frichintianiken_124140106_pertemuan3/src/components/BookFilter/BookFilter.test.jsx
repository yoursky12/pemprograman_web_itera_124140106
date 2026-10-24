import { fireEvent, render, screen } from '@testing-library/react';
import BookFilter from './BookFilter.jsx';

describe('BookFilter', () => {
  it('memanggil onSearchChange saat mengetik', () => {
    const onSearchChange = vi.fn();
    render(
      <BookFilter status="semua" search="" onStatusChange={() => {}} onSearchChange={onSearchChange} />
    );
    fireEvent.change(screen.getByLabelText('Cari buku'), { target: { value: 'react' } });
    expect(onSearchChange).toHaveBeenCalledWith('react');
  });

  it('memanggil onStatusChange saat tab diklik', () => {
    const onStatusChange = vi.fn();
    render(
      <BookFilter status="semua" search="" onStatusChange={onStatusChange} onSearchChange={() => {}} />
    );
    fireEvent.click(screen.getByRole('button', { name: 'Milik' }));
    expect(onStatusChange).toHaveBeenCalledWith('milik');
  });
});
