import os

import zope.sqlalchemy
from sqlalchemy import engine_from_config
from sqlalchemy.engine import make_url
from sqlalchemy.orm import sessionmaker

from .mahasiswa import Mahasiswa
from .matakuliah import Matakuliah


def get_engine(settings):
    settings = dict(settings)
    url = make_url(os.environ.get("PAW6_DATABASE_URL") or settings["sqlalchemy.url"])
    if url.drivername == "postgresql":
        url = url.set(drivername="postgresql+psycopg2")
    settings["sqlalchemy.url"] = url
    return engine_from_config(settings, "sqlalchemy.")


def includeme(config):
    factory = sessionmaker(bind=get_engine(config.get_settings()))

    def dbsession(request):
        session = factory()
        zope.sqlalchemy.register(session, transaction_manager=request.tm)
        return session

    config.add_request_method(dbsession, reify=True)

