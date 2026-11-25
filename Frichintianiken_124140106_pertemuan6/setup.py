from setuptools import find_packages, setup

setup(
    name="pyramid_mahasiswa",
    version="0.1",
    packages=find_packages(),
    include_package_data=True,
    package_data={"pyramid_mahasiswa": ["alembic/script.py.mako", "alembic/versions/*.py"]},
    install_requires=[
        "pyramid", "pyramid_tm", "pyramid_jinja2", "waitress",
        "SQLAlchemy", "alembic", "zope.sqlalchemy", "psycopg2-binary",
    ],
    extras_require={"testing": ["WebTest"]},
    entry_points={
        "paste.app_factory": ["main = pyramid_mahasiswa:main"],
        "console_scripts": [
            "initialize_pyramid_mahasiswa_db = pyramid_mahasiswa.scripts.initialize_db:main",
        ],
    },
)
