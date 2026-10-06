// ==========================================
// 1. ARRAY OBJEK MAHASISWA
// ==========================================

let mahasiswa = [
    {
        nama: "Andi",
        nim: "123001",
        jurusan: "Informatika",
        nilai: 85
    },
    {
        nama: "Budi",
        nim: "123002",
        jurusan: "Sistem Informasi",
        nilai: 75
    },
    {
        nama: "Citra",
        nim: "123003",
        jurusan: "Informatika",
        nilai: 90
    },
    {
        nama: "Dina",
        nim: "123004",
        jurusan: "Teknik Sipil",
        nilai: 65
    },
    {
        nama: "Eka",
        nim: "123005",
        jurusan: "Informatika",
        nilai: 80
    }
];


// ==========================================
// 2. MENAMPILKAN DATA DALAM TABEL
// ==========================================

function tampilkanData() {

    let tabel = document.getElementById("dataMahasiswa");

    tabel.innerHTML = "";

    mahasiswa.forEach(function(mhs, index) {

        tabel.innerHTML += `
            <tr>
                <td>${mhs.nama}</td>
                <td>${mhs.nim}</td>
                <td>${mhs.jurusan}</td>
                <td>${mhs.nilai}</td>
                <td>
                    <button onclick="editMahasiswa(${index})">
                        Edit
                    </button>

                    <button onclick="hapusMahasiswa(${index})">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
    });
}


// ==========================================
// 3. MENCARI NILAI TERTINGGI
// ==========================================

function cariNilaiTertinggi() {

    let tertinggi = mahasiswa.reduce(function(a, b) {

        return a.nilai > b.nilai ? a : b;

    });

    document.getElementById("nilaiTertinggi").textContent =
        tertinggi.nama + " - Nilai: " + tertinggi.nilai;
}


// ==========================================
// 4. FILTER NILAI DI ATAS RATA-RATA
// ==========================================

function cariDiAtasRata() {

    let total = mahasiswa.reduce(function(total, mhs) {

        return total + mhs.nilai;

    }, 0);

    let rataRata = total / mahasiswa.length;

    let hasil = mahasiswa.filter(function(mhs) {

        return mhs.nilai > rataRata;

    });

    let daftar = document.getElementById("diAtasRata");

    daftar.innerHTML = "";

    hasil.forEach(function(mhs) {

        daftar.innerHTML +=
            `<li>${mhs.nama} - ${mhs.nilai}</li>`;
    });

    console.log("Nilai rata-rata:", rataRata);
}


// ==========================================
// 5. SORTING NAMA A-Z
// ==========================================

function urutNamaAsc() {

    mahasiswa.sort(function(a, b) {

        return a.nama.localeCompare(b.nama);

    });

    tampilkanData();
}


// ==========================================
// 6. SORTING NAMA Z-A
// ==========================================

function urutNamaDesc() {

    mahasiswa.sort(function(a, b) {

        return b.nama.localeCompare(a.nama);

    });

    tampilkanData();
}


// ==========================================
// 7. CREATE - MENAMBAHKAN MAHASISWA
// ==========================================

document.getElementById("tambah").addEventListener(
    "click",
    function() {

        let nama = document.getElementById("nama").value;
        let nim = document.getElementById("nim").value;
        let jurusan = document.getElementById("jurusan").value;
        let nilai = Number(
            document.getElementById("nilai").value
        );

        if (
            nama === "" ||
            nim === "" ||
            jurusan === "" ||
            nilai === 0
        ) {
            alert("Semua data harus diisi!");
            return;
        }

        mahasiswa.push({
            nama: nama,
            nim: nim,
            jurusan: jurusan,
            nilai: nilai
        });

        tampilkanData();
        cariNilaiTertinggi();
        cariDiAtasRata();

        document.getElementById("nama").value = "";
        document.getElementById("nim").value = "";
        document.getElementById("jurusan").value = "";
        document.getElementById("nilai").value = "";
    }
);


// ==========================================
// 8. UPDATE - MENGEDIT MAHASISWA
// ==========================================

function editMahasiswa(index) {

    let namaBaru = prompt(
        "Masukkan nama baru:",
        mahasiswa[index].nama
    );

    let nilaiBaru = prompt(
        "Masukkan nilai baru:",
        mahasiswa[index].nilai
    );

    if (namaBaru !== null && nilaiBaru !== null) {

        mahasiswa[index].nama = namaBaru;
        mahasiswa[index].nilai = Number(nilaiBaru);

        tampilkanData();
        cariNilaiTertinggi();
        cariDiAtasRata();
    }
}


// ==========================================
// 9. DELETE - MENGHAPUS MAHASISWA
// ==========================================

function hapusMahasiswa(index) {

    mahasiswa.splice(index, 1);

    tampilkanData();
    cariNilaiTertinggi();
    cariDiAtasRata();
}


// ==========================================
// 10. EVENT HANDLER
// ==========================================

document.getElementById("tampilkan").addEventListener(
    "click",
    function() {

        tampilkanData();
        cariNilaiTertinggi();
        cariDiAtasRata();
    }
);


document.getElementById("namaAsc").addEventListener(
    "click",
    function() {

        urutNamaAsc();
    }
);


document.getElementById("namaDesc").addEventListener(
    "click",
    function() {

        urutNamaDesc();
    }
);