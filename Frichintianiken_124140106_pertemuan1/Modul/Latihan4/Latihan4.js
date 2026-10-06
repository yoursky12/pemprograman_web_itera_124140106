// ==========================================
// 1. FORM INPUT MAHASISWA + VALIDASI
// ==========================================

let mahasiswa = JSON.parse(
    localStorage.getItem("mahasiswa")
) || [];

let formMahasiswa = document.getElementById("formMahasiswa");

formMahasiswa.addEventListener("submit", function(event) {

    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let nim = document.getElementById("nim").value;
    let jurusan = document.getElementById("jurusan").value;

    // Validasi form
    if (nama === "" || nim === "" || jurusan === "") {
        alert("Semua data harus diisi!");
        return;
    }

    let dataBaru = {
        nama: nama,
        nim: nim,
        jurusan: jurusan
    };

    mahasiswa.push(dataBaru);

    // Simpan ke localStorage
    localStorage.setItem(
        "mahasiswa",
        JSON.stringify(mahasiswa)
    );

    tampilkanMahasiswa();

    formMahasiswa.reset();

    alert("Data mahasiswa berhasil ditambahkan!");
});


// Menampilkan data mahasiswa
function tampilkanMahasiswa() {

    let daftar = document.getElementById("daftarMahasiswa");

    daftar.innerHTML = "";

    mahasiswa.forEach(function(mhs) {

        let li = document.createElement("li");

        li.textContent =
            mhs.nama +
            " - " +
            mhs.nim +
            " - " +
            mhs.jurusan;

        daftar.appendChild(li);
    });
}

tampilkanMahasiswa();


// ==========================================
// 2. SEARCH / FILTER POST DARI API
// ==========================================

let semuaPost = [];

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        semuaPost = data;

        tampilkanPost(semuaPost);
    });


// Tombol search
document.getElementById("cariPost").addEventListener(
    "click",
    function() {

        let keyword = document
            .getElementById("searchPost")
            .value
            .toLowerCase();

        let hasil = semuaPost.filter(function(post) {

            return post.title
                .toLowerCase()
                .includes(keyword);
        });

        tampilkanPost(hasil);
    }
);


// Menampilkan post
function tampilkanPost(data) {

    let hasil = document.getElementById("hasilPost");

    hasil.innerHTML = "";

    data.slice(0, 10).forEach(function(post) {

        let div = document.createElement("div");

        div.classList.add("post");

        div.innerHTML = `
            <strong>${post.id}. ${post.title}</strong>
            <p>${post.body}</p>
        `;

        hasil.appendChild(div);
    });
}


// ==========================================
// 3. DARK MODE TOGGLE
// ==========================================

document.getElementById("darkMode").addEventListener(
    "click",
    function() {

        document.body.classList.toggle("dark-mode");

    }
);


// ==========================================
// 4. PAGINATION API
// ==========================================

let halaman = 1;
let jumlahData = 5;


// Menampilkan data sesuai halaman
function tampilkanPagination() {

    let mulai = (halaman - 1) * jumlahData;

    let akhir = mulai + jumlahData;

    let dataHalaman = semuaPost.slice(mulai, akhir);

    let container = document.getElementById(
        "paginationPost"
    );

    container.innerHTML = "";

    dataHalaman.forEach(function(post) {

        let div = document.createElement("div");

        div.classList.add("post");

        div.innerHTML = `
            <strong>${post.id}. ${post.title}</strong>
        `;

        container.appendChild(div);
    });
}


// Tombol Previous
document.getElementById("previous").addEventListener(
    "click",
    function() {

        if (halaman > 1) {

            halaman--;

            tampilkanPagination();
        }
    }
);


// Tombol Next
document.getElementById("next").addEventListener(
    "click",
    function() {

        let jumlahHalaman =
            Math.ceil(semuaPost.length / jumlahData);

        if (halaman < jumlahHalaman) {

            halaman++;

            tampilkanPagination();
        }
    }
);


// ==========================================
// 5. TODO LIST + LOCAL STORAGE
// ==========================================

let todo = JSON.parse(
    localStorage.getItem("todo")
) || [];


// Menampilkan Todo
function tampilkanTodo() {

    let daftar = document.getElementById("daftarTodo");

    daftar.innerHTML = "";

    todo.forEach(function(item, index) {

        let li = document.createElement("li");

        let teks = document.createElement("span");

        teks.textContent = item.nama;

        // Jika sudah selesai
        if (item.selesai) {
            teks.style.textDecoration = "line-through";
        }


        // Tombol selesai
        let tombolSelesai =
            document.createElement("button");

        tombolSelesai.textContent = "Selesai";

        tombolSelesai.addEventListener(
            "click",
            function() {

                todo[index].selesai = true;

                simpanTodo();

                tampilkanTodo();
            }
        );


        // Tombol hapus
        let tombolHapus =
            document.createElement("button");

        tombolHapus.textContent = "Hapus";

        tombolHapus.addEventListener(
            "click",
            function() {

                todo.splice(index, 1);

                simpanTodo();

                tampilkanTodo();
            }
        );


        li.appendChild(teks);
        li.appendChild(tombolSelesai);
        li.appendChild(tombolHapus);

        daftar.appendChild(li);
    });
}


// Menambahkan Todo
document.getElementById("tambahTodo").addEventListener(
    "click",
    function() {

        let input =
            document.getElementById("todoInput");

        if (input.value === "") {

            alert("Todo tidak boleh kosong!");

            return;
        }

        todo.push({
            nama: input.value,
            selesai: false
        });

        simpanTodo();

        input.value = "";

        tampilkanTodo();
    }
);


// Menyimpan Todo
function simpanTodo() {

    localStorage.setItem(
        "todo",
        JSON.stringify(todo)
    );
}


tampilkanTodo();