// ==========================================
// 1. ARRAY 5 OBJEK MAHASISWA
// ==========================================

let mahasiswa = [
    {
        nama: "Frichintia Niken Gita Natasyah",
        nim: "124140106",
        jurusan: "Teknik Informatika",
        nilai: 90
    },
    {
        nama: "Gede Valendra",
        nim: "124140142",
        jurusan: "Teknik Informatika",
        nilai: 85
    },
    {
        nama: "Olivia",
        nim: "124140034",
        jurusan: "Teknik Informatika",
        nilai: 80
    },
    {
        nama: "Fadilla Andia Putri",
        nim: "124140136",
        jurusan: "Teknik Informatika",
        nilai: 88
    }
];


// ==========================================
// 2. MENAMPILKAN DATA
// ==========================================

function tampilkanMahasiswa() {
    console.table(mahasiswa);
}
tampilkanMahasiswa();


// ==========================================
// 3. MENCARI NILAI TERTINGGI
// ==========================================

function nilaiTertinggi() {
    let tertinggi = mahasiswa.reduce(function(a, b) {
        return a.nilai > b.nilai ? a : b;
    });

    console.log("Mahasiswa dengan nilai tertinggi:");
    console.log(tertinggi);
}
nilaiTertinggi();


// ==========================================
// 4. FILTER NILAI DI ATAS RATA-RATA
// ==========================================

function diAtasRataRata() {

    let total = mahasiswa.reduce(function(total, mhs) {
        return total + mhs.nilai;
    }, 0);

    let rataRata = total / mahasiswa.length;
    let hasil = mahasiswa.filter(function(mhs) {
        return mhs.nilai > rataRata;
    });

    console.log("Nilai rata-rata:", rataRata);

    console.log("Mahasiswa di atas rata-rata:");

    console.table(hasil);
}

diAtasRataRata();


// ==========================================
// 5. URUTKAN NAMA ASCENDING
// ==========================================

function urutNamaAsc() {
    let hasil = [...mahasiswa];
    hasil.sort(function(a, b) {
        return a.nama.localeCompare(b.nama);
    });

    console.log("Nama A-Z:");

    console.table(hasil);
}

urutNamaAsc();


// ==========================================
// 6. URUTKAN NAMA DESCENDING
// ==========================================

function urutNamaDesc() {

    let hasil = [...mahasiswa];

    hasil.sort(function(a, b) {

        return b.nama.localeCompare(a.nama);

    });

    console.log("Nama Z-A:");

    console.table(hasil);
}

urutNamaDesc();


// ==========================================
// 7. CREATE
// ==========================================

function tambahMahasiswa(nama, nim, jurusan, nilai) {

    mahasiswa.push({
        nama: nama,
        nim: nim,
        jurusan: jurusan,
        nilai: nilai
    });

    console.log("Data berhasil ditambahkan.");

}


// Contoh Create
tambahMahasiswa(
    "Nafisya Ghalia",
    "124140100",
    "Teknik Informatika",
    92
);

tampilkanMahasiswa();


// ==========================================
// 8. UPDATE
// ==========================================

function updateMahasiswa(nim, namaBaru, nilaiBaru) {

    let mhs = mahasiswa.find(function(mhs) {

        return mhs.nim === nim;

    });

    if (mhs) {

        mhs.nama = namaBaru;
        mhs.nilai = nilaiBaru;

        console.log("Data berhasil diubah.");

    } else {

        console.log("Mahasiswa tidak ditemukan.");

    }
}


// Contoh Update
updateMahasiswa(
    "124140100",
    "Nafisya Ghalia",
    90
);

tampilkanMahasiswa();


// ==========================================
// 9. DELETE
// ==========================================

function hapusMahasiswa(nim) {

    let index = mahasiswa.findIndex(function(mhs) {

        return mhs.nim === nim;

    });

    if (index !== -1) {

        mahasiswa.splice(index, 1);

        console.log("Data berhasil dihapus.");

    } else {

        console.log("Mahasiswa tidak ditemukan.");

    }
}


// Contoh Delete
hapusMahasiswa("124140034");

tampilkanMahasiswa();