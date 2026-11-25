import argparse
from datetime import date

from pyramid.paster import get_appsettings
from sqlalchemy.dialects.postgresql import insert

from pyramid_mahasiswa.models import Mahasiswa, Matakuliah, get_engine


def main():
    parser = argparse.ArgumentParser(description="Isi data awal PostgreSQL")
    parser.add_argument("config_uri")
    args = parser.parse_args()
    engine = get_engine(get_appsettings(args.config_uri))

    mahasiswa = [
        dict(
            nim="124140106",
            nama="Frichintia Niken Gita Natasyah",
            jurusan="Teknik Informatika",
        ),
        dict(
            nim="124140142",
            nama="Gede Valendra",
            jurusan="Teknik Informatika",
        ),

        dict(
            nim="124140019",
            nama="Nivalesha",
            jurusan="Teknik Material",
        ),
]
    
    matakuliah = [
        dict(kode_mk="IF2110", nama_mk="Pemrograman Web", sks=3, semester=3),
        dict(kode_mk="IF3140", nama_mk="Basis Data", sks=4, semester=5),
        dict(kode_mk="IF3101", nama_mk="Rekayasa Perangkat Lunak", sks=3, semester=5),
    ]
    with engine.begin() as connection:
        connection.execute(
            insert(Mahasiswa).values(mahasiswa).on_conflict_do_nothing(index_elements=["nim"])
        )
        connection.execute(
            insert(Matakuliah).values(matakuliah).on_conflict_do_nothing(index_elements=["kode_mk"])
        )
    print("Data awal mahasiswa dan matakuliah tersedia.")
