import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Stats from './pages/Stats/Stats.jsx';

// Komponen root: navigasi + routing multi-halaman
export default function App() {
  return (
    <div className="container">
      <header className="navbar">
        <h1>Perpustakaan Pribadi</h1>
        <nav>
          <NavLink to="/" end>Daftar Buku</NavLink>
          <NavLink to="/stats">Dashboard</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="*" element={<p>Halaman tidak ditemukan.</p>} />
      </Routes>
    </div>
  );
}
