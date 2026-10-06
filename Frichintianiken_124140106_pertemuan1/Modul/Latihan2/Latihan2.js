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
// 4. Kalkulator BMI dengan Fungsi
//    dan Event Handler
// ==========================================

function hitungBMI(berat, tinggi) {

    let tinggiMeter = tinggi / 100;

    let bmi = berat / (tinggiMeter * tinggiMeter);

    return bmi;
}


document.getElementById("hitungBMI").addEventListener(
    "click",
    function() {

        let berat = Number(
            document.getElementById("berat").value
        );

        let tinggi = Number(
            document.getElementById("tinggi").value
        );

        if (berat <= 0 || tinggi <= 0) {

            document.getElementById("hasilBMI").textContent =
                "Berat dan tinggi harus diisi.";

            return;
        }

        let hasil = hitungBMI(berat, tinggi);

        document.getElementById("hasilBMI").textContent =
            "Hasil BMI: " + hasil.toFixed(2);
    }
);


// ==========================================
// 5. FizzBuzz
// ==========================================

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