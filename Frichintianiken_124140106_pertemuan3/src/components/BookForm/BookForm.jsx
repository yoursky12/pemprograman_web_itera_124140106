import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './BookForm.css';

const EMPTY = { title: '', author: '', status: 'milik' };

// Komponen reusable #1: form tambah / edit buku (dengan validasi)
export default function BookForm({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState(initialData || EMPTY);
  const [errors, setErrors] = useState({});

  // Saat mode edit berganti, isi ulang form
  useEffect(() => {
    setForm(initialData || EMPTY);
    setErrors({});
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' })); // hapus error saat mengetik
  };

  // Validasi kolom wajib isi
  const validate = () => {
    const next = {};
    if (!form.title.trim()) next.title = 'Judul wajib diisi';
    if (!form.author.trim()) next.author = 'Penulis wajib diisi';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ ...form, title: form.title.trim(), author: form.author.trim() });
    if (!initialData) setForm(EMPTY); // reset hanya untuk mode tambah
  };

  return (
    <form className="book-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="title">Judul</label>
        <input
          id="title" name="title" value={form.title} onChange={handleChange}
          className={errors.title ? 'invalid' : ''} placeholder="Judul buku"
        />
        {errors.title && <span className="error" role="alert">{errors.title}</span>}
      </div>

      <div className="field">
        <label htmlFor="author">Penulis</label>
        <input
          id="author" name="author" value={form.author} onChange={handleChange}
          className={errors.author ? 'invalid' : ''} placeholder="Nama penulis"
        />
        {errors.author && <span className="error" role="alert">{errors.author}</span>}
      </div>

      <div className="field">
        <label htmlFor="status">Status</label>
        <select id="status" name="status" value={form.status} onChange={handleChange}>
          <option value="milik">Dimiliki</option>
          <option value="beli">Ingin dibeli</option>
        </select>
      </div>

      <div className="actions">
        <button type="submit">{initialData ? 'Simpan' : 'Tambah buku'}</button>
        {onCancel && <button type="button" className="ghost" onClick={onCancel}>Batal</button>}
      </div>
    </form>
  );
}

BookForm.propTypes = {
  initialData: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.oneOf(['milik', 'baca', 'beli']),
  }),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
};

BookForm.defaultProps = { initialData: null, onCancel: undefined };
