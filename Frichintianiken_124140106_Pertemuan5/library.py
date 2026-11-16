# Class untuk mengelola koleksi item perpustakaan.
class Library:
    def __init__(self, nama):
        self.nama = nama
        self.__koleksi = []

    # Menambahkan item ke dalam koleksi.
    def tambah_item(self, item):
        self.__koleksi.append(item)
        print(f"Item '{item._judul}' berhasil ditambahkan.")

    # Menampilkan semua item yang tersedia.
    def tampilkan_katalog(self):
        print("\n=== KATALOG PERPUSTAKAAN ===")
        ada_item = False

        for item in self.__koleksi:
            if not item.is_dipinjam:
                print(item.get_detail())
                ada_item = True

        if not ada_item:
            print("Tidak ada item yang tersedia.")

    # Mencari item menggunakan judul atau ID.
    def cari_item(self, kata_kunci):
        print(f"\n=== HASIL PENCARIAN: {kata_kunci} ===")
        ditemukan = False
        kata_kunci = str(kata_kunci).lower()

        for item in self.__koleksi:
            if kata_kunci in str(item._id_item).lower() or kata_kunci in item._judul.lower():
                print(item.get_detail())
                ditemukan = True

        if not ditemukan:
            print("Item tidak ditemukan.")
