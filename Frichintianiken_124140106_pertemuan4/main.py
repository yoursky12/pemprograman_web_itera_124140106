
import math_operations
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

sisi = 5
panjang = 10
lebar = 4
jari_jari = 7
suhu = 30

print("------ PERHITUNGAN GEOMETRI ------")

print("\n--- Persegi ---")
print(f"Sisi: {sisi}")
print(f"Luas: {math_operations.luas_persegi(sisi)}")
print(f"Keliling: {math_operations.keliling_persegi(sisi)}")

print("\n--- Persegi Panjang ---")
print(f"Panjang: {panjang}")
print(f"Lebar: {lebar}")
print(f"Luas: {math_operations.luas_persegi_panjang(panjang, lebar)}")
print(f"Keliling: {math_operations.keliling_persegi_panjang(panjang, lebar)}")

print("\n--- Lingkaran ---")
print(f"Jari-jari: {jari_jari}")
print(f"Luas: {math_operations.luas_lingkaran(jari_jari):.2f}")
print(f"Keliling: {math_operations.keliling_lingkaran(jari_jari):.2f}")

print("\n========== KONVERSI SUHU ==========")
print(f"Suhu Celsius: {suhu} C")
print(f"Fahrenheit: {celsius_ke_fahrenheit(suhu):.2f} F")
print(f"Kelvin: {celsius_ke_kelvin(suhu):.2f} K")
