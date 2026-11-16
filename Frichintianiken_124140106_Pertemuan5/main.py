from library_item import Book, Magazine
from library import Library


# Program utama untuk mencoba fitur perpustakaan.
def main():
    perpustakaan = Library("Perpustakaan Sederhana")

    # Membuat beberapa buku.
    buku1 = Book("B001", "Teka Teki Rumah Aneh", 2022, "Anonim")
    buku2 = Book("B002", "Teka Teki Gambar Aneh", 2023, "Anonim")

    # Membuat majalah dengan tema Kota Prabumulih.
    majalah1 = Magazine("M001", "Mengenal Kota Prabumulih", 2024, "Edisi 1")
    majalah2 = Magazine("M002", "Wisata dan Kuliner Prabumulih", 2025, "Edisi 2")

    # Menambahkan semua item ke perpustakaan.
    print("=== TAMBAH ITEM ===")
    perpustakaan.tambah_item(buku1)
    perpustakaan.tambah_item(buku2)
    perpustakaan.tambah_item(majalah1)
    perpustakaan.tambah_item(majalah2)

    # Menampilkan katalog yang tersedia.
    perpustakaan.tampilkan_katalog()

    # Mencari item berdasarkan judul dan ID.
    perpustakaan.cari_item("Teka Teki Rumah Aneh")
    perpustakaan.cari_item("M002")

    # Contoh perubahan status peminjaman.
    print("\n=== STATUS PEMINJAMAN ===")
    buku1.set_status_pinjam(True)
    print(f"{buku1._judul}: {buku1.get_status()}")

    # Katalog setelah salah satu buku dipinjam.
    perpustakaan.tampilkan_katalog()


if __name__ == "__main__":
    main()
