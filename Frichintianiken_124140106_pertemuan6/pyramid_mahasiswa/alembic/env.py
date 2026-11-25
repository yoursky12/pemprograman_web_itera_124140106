from alembic import context

from pyramid_mahasiswa.models import get_engine
from pyramid_mahasiswa.models.meta import Base

settings = context.config.get_section("app:main")
engine = get_engine(settings)
if context.is_offline_mode():
    context.configure(url=engine.url, target_metadata=Base.metadata, literal_binds=True)
    with context.begin_transaction():
        context.run_migrations()
else:
    with engine.connect() as connection:
        context.configure(connection=connection, target_metadata=Base.metadata)
        with context.begin_transaction():
            context.run_migrations()
