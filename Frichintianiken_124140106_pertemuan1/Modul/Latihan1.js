// 1. Data diri menggunakan const dan let
const nama = "Frichintia";
let umur = 20;
const kotaAsal = "Prabumulih";

console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Kota Asal:", kotaAsal);


// 2. Pengecekan kelulusan
let nilai = 80;

if (nilai >= 70) {
    console.log("Keterangan: Lulus");
} else {
    console.log("Keterangan: Tidak Lulus");
}


// 3. Kategori umur
let usia = 20;

if (usia < 12) {
    console.log("Kategori: Anak");
} else if (usia >= 12 && usia <= 17) {
    console.log("Kategori: Remaja");
} else if (usia >= 18 && usia <= 59) {
    console.log("Kategori: Dewasa");
} else {
    console.log("Kategori: Lansia");
}


// 4. Konversi angka hari menggunakan switch-case
let angkaHari = 3;

switch (angkaHari) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Angka hari tidak valid");
}


// 5. Kalkulator grade menggunakan ternary operator
let nilaiGrade = 85;

let grade = nilaiGrade >= 80 ? "A" :
            nilaiGrade >= 70 ? "B" :
            nilaiGrade >= 60 ? "C" :
            nilaiGrade >= 50 ? "D" : "E";

console.log("Nilai:", nilaiGrade);
console.log("Grade:", grade);