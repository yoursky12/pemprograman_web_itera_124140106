// ==========================================
// 1. Tabel Perkalian 1-10
// ==========================================

let angka = 7;

console.log("Tabel Perkalian " + angka);
for (let i = 1; i <= 10; i++) {
    console.log(angka + " x " + i + " = " + (angka * i));
}


// ==========================================
// 2. Fungsi Faktorial
// ==========================================

function faktorial(angka) {
    let hasil = 1;
    for (let i = 1; i <= angka; i++) {
        hasil = hasil * i;
    }
    return hasil;
}
console.log("Faktorial 5 =", faktorial(5));


// ==========================================
// 3. Mengecek Bilangan Prima
// ==========================================

function cekPrima(angka) {
    if (angka < 2) {
        return false;
    }
    for (let i = 2; i < angka; i++) {
        if (angka % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Apakah 7 bilangan prima?", cekPrima(7));


// ==========================================
// 4. Kalkulator BMI
// ==========================================

function hitungBMI(berat, tinggi) {
    let tinggiMeter = tinggi / 100;
    let bmi = berat / (tinggiMeter * tinggiMeter);
    return bmi;
}

let berat = 40;
let tinggi = 150;

let hasilBMI = hitungBMI(berat, tinggi);

console.log("Berat:", berat, "kg");
console.log("Tinggi:", tinggi, "cm");
console.log("BMI:", hasilBMI.toFixed(2));


// ==========================================
// 5. FizzBuzz
// ==========================================

console.log("FizzBuzz:");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}