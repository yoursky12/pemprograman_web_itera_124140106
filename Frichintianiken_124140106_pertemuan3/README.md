# Buku Saya — Aplikasi Manajemen Buku Pribadi

Aplikasi React untuk mencatat buku yang **dimiliki**, **sedang dibaca**, atau **ingin dibeli**.
Tugas Praktikum PAW Pertemuan 3 (React Basics).

> Ganti `NAMA_NIM` pada nama folder dengan format `[NAMA]_[NIM]_pertemuan3`.

## Fitur
- Tambah, edit, dan hapus buku (judul, penulis, status)
- Filter berdasarkan status
- Pencarian berdasarkan judul atau penulis
- Halaman statistik
- Data tersimpan permanen di `localStorage`
- Validasi form dengan umpan balik visual

## Instalasi & Menjalankan
```bash
npm install
npm run dev      # jalankan aplikasi di http://localhost:5173
npm test         # jalankan unit test
npm run build    # build produksi
```

## Screenshot
<!-- Tambahkan screenshot di sini, contoh: -->
<!-- ![Halaman Daftar](./screenshots/home.png) -->
<!-- ![Halaman Statistik](./screenshots/stats.png) -->

## Fitur React yang Digunakan
| Konsep | Penerapan |
|---|---|
| `useState` | Form, filter, pencarian, mode edit |
| `useEffect` | Sinkronisasi localStorage, reset form saat mode edit berubah |
| `useMemo` / `useCallback` | `filteredBooks`, `useBookStats`, aksi CRUD di context |
| Context API | `BookContext.jsx` menyimpan buku, filter, dan aksi CRUD |
| React Router | Rute `/` (Daftar) dan `/stats` (Statistik) |
| Custom Hooks | `useLocalStorage`, `useBookStats` |
| Komponen reusable | `BookForm`, `BookList` (+`BookItem`), `BookFilter` |
| PropTypes | Seluruh komponen |
| Error handling | Validasi kolom wajib + kelas `invalid` dan pesan error |

## Struktur Folder
```
src/
├── components/ (BookForm, BookList, BookFilter)
├── pages/      (Home, Stats)
├── hooks/      (useLocalStorage, useBookStats)
├── context/    (BookContext.jsx)
└── App.jsx
```

## Laporan Testing
Jalankan `npm test`, lalu tempel screenshot hasil di terminal di bawah ini.

<!-- ![Hasil test](./screenshots/test.png) -->

Daftar test (15 test):
- `useBookStats` (2), `useLocalStorage` (3)
- `BookForm` (3), `BookFilter` (2), `BookList` (3)
- `BookContext` (2)
