import { useEffect, useState } from 'react';

/**
 * Custom hook #1: state yang otomatis tersimpan di localStorage.
 * - Saat pertama render, nilai dibaca dari localStorage (jika ada).
 * - Setiap nilai berubah, useEffect menyimpannya kembali.
 */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue; // data rusak / storage tidak tersedia
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* abaikan error kuota storage */
    }
  }, [key, value]);

  return [value, setValue];
}
