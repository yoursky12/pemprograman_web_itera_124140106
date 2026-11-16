from abc import ABC, abstractmethod


# Class induk untuk semua jenis item perpustakaan.
class LibraryItem(ABC):
    def __init__(self, id_item, judul, tahun):
        self._id_item = id_item
        self._judul = judul
        self._tahun = tahun
        self.__dipinjam = False

    # Property untuk melihat status peminjaman item.
    @property
    def is_dipinjam(self):
        return self.__dipinjam

    # Mengubah status peminjaman item.
    def set_status_pinjam(self, status):
        self.__dipinjam = status

    # Method abstract yang harus dibuat oleh subclass.
    @abstractmethod
    def get_detail(self):
        pass

    # Mengembalikan status ketersediaan item.
    def get_status(self):
        if self.__dipinjam:
            return "Sedang dipinjam"
        return "Tersedia"


# Class Book mewarisi LibraryItem.
class Book(LibraryItem):
    def __init__(self, id_item, judul, tahun, penulis):
        super().__init__(id_item, judul, tahun)
        self.penulis = penulis

    # Menampilkan detail buku.
    def get_detail(self):
        return f"Buku | ID: {self._id_item} | Judul: {self._judul} | Penulis: {self.penulis} | Tahun: {self._tahun} | Status: {self.get_status()}"


# Class Magazine mewarisi LibraryItem.
class Magazine(LibraryItem):
    def __init__(self, id_item, judul, tahun, edisi):
        super().__init__(id_item, judul, tahun)
        self.edisi = edisi

    # Menampilkan detail majalah.
    def get_detail(self):
        return f"Majalah | ID: {self._id_item} | Judul: {self._judul} | Edisi: {self.edisi} | Tahun: {self._tahun} | Status: {self.get_status()}"
