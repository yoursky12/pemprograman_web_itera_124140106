"""Create matakuliah table."""

from alembic import op
import sqlalchemy as sa

revision = "matakuliah_01"
down_revision = "mahasiswa_01"
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "matakuliah",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("kode_mk", sa.Text(), unique=True, nullable=False),
        sa.Column("nama_mk", sa.Text(), nullable=False),
        sa.Column("sks", sa.Integer(), nullable=False),
        sa.Column("semester", sa.Integer(), nullable=False),
    )


def downgrade():
    op.drop_table("matakuliah")
