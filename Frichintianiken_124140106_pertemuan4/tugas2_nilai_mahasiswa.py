
mahasiswa = [
    {"nama": "Fichintia niken", "nim": "124140101", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 80},
    {"nama": "Gede valendra", "nim": "124140102", "nilai_uts": 90, "nilai_uas": 95, "nilai_tugas": 80},
    {"nama": "Olivia", "nim": "124140103", "nilai_uts": 80, "nilai_uas": 85, "nilai_tugas": 90},
    {"nama": "Fadilla andia", "nim": "124140104", "nilai_uts": 70, "nilai_uas": 85, "nilai_tugas": 90},
    {"nama": "Nafisya ghalia", "nim": "124140105", "nilai_uts": 90, "nilai_uas": 85, "nilai_tugas": 70}
]

for mhs in mahasiswa:
    nilai_akhir = (0.3 * mhs["nilai_uts"]) + (0.4 * mhs["nilai_uas"]) + (0.3 * mhs["nilai_tugas"])

    if nilai_akhir >= 80:
        grade = "A"
    elif nilai_akhir >= 70:
        grade = "B"
    elif nilai_akhir >= 60:
        grade = "C"
    elif nilai_akhir >= 50:
        grade = "D"
    else:
        grade = "E"

    mhs["nilai_akhir"] = nilai_akhir
    mhs["grade"] = grade

print("------ DATA NILAI MAHASISWA ------")
print(f"{'Nama':<10} {'NIM':<12} {'Nilai Akhir':<15} {'Grade':<5}")
print("-" * 45)

for mhs in mahasiswa:
    print(f"{mhs['nama']:<10} {mhs['nim']:<12} {mhs['nilai_akhir']:<15.2f} {mhs['grade']:<5}")

tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print("\n------ NILAI TERTINGGI ------")
print(f"Nama        : {tertinggi['nama']}")
print(f"NIM         : {tertinggi['nim']}")
print(f"Nilai Akhir : {tertinggi['nilai_akhir']:.2f}")
print(f"Grade       : {tertinggi['grade']}")

print("\n------ NILAI TERENDAH ------")
print(f"Nama        : {terendah['nama']}")
print(f"NIM         : {terendah['nim']}")
print(f"Nilai Akhir : {terendah['nilai_akhir']:.2f}")
print(f"Grade       : {terendah['grade']}")
