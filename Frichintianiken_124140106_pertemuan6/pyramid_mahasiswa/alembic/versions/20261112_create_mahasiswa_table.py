"""Create mahasiswa table."""

from alembic import op
import sqlalchemy as sa

revision = "mahasiswa_01"
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "mahasiswa",
        sa.Column("id", sa.Integer(), primary_key=True),
        sa.Column("nim", sa.Text(), unique=True, nullable=False),
        sa.Column("nama", sa.Text(), nullable=False),
        sa.Column("jurusan", sa.Text(), nullable=False),
        sa.Column("tanggal_lahir", sa.Date()),
        sa.Column("alamat", sa.Text()),
    )


def downgrade():
    op.drop_table("mahasiswa")
