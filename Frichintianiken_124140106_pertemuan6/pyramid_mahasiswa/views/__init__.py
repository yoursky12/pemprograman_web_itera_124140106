from datetime import date

from pyramid.httpexceptions import HTTPBadRequest, HTTPNotFound
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError


class Resource:
    def __init__(self, model, name, required, optional=(), integers=()):
        self.model = model
        self.name = name
        self.required = tuple(required)
        self.fields = self.required + optional
        self.integers = integers

    def list(self, request):
        rows = request.dbsession.scalars(
            select(self.model).order_by(self.model.id)
        )
        return {f"{self.name}s": [row.to_dict() for row in rows]}

    def find(self, request):
        raw_id = request.matchdict["id"]
        try:
            item_id = int(raw_id)
        except ValueError:
            item_id = 0

        item = None
        if 0 < item_id <= 2_147_483_647:
            item = request.dbsession.get(self.model, item_id)
        if item is None:
            raise HTTPNotFound(
                json_body={
                    "error": (
                        f"{self.name.capitalize()} dengan ID {raw_id} "
                        "tidak ditemukan"
                    )
                }
            )
        return item

    def detail(self, request):
        return {self.name: self.find(request).to_dict()}

    def payload(self, request, creating):
        try:
            data = request.json_body
        except ValueError:
            raise HTTPBadRequest(json_body={"error": "JSON tidak valid"})
        if not isinstance(data, dict):
            raise HTTPBadRequest(
                json_body={"error": "Body harus berupa objek JSON"}
            )

        values = {}
        for field in self.fields:
            if field not in data:
                if creating and field in self.required:
                    raise HTTPBadRequest(
                        json_body={"error": f"Field {field} wajib diisi!"}
                    )
                continue

            value = data[field]
            if field in self.integers:
                if type(value) is not int or not 0 < value <= 2_147_483_647:
                    raise HTTPBadRequest(
                        json_body={"error": f"{field} harus integer positif"}
                    )
            elif field == "tanggal_lahir":
                if value is not None:
                    try:
                        parsed = date.fromisoformat(value)
                        if parsed.isoformat() != value:
                            raise ValueError
                        value = parsed
                    except (TypeError, ValueError):
                        raise HTTPBadRequest(
                            json_body={
                                "error": (
                                    "Tanggal lahir harus berformat YYYY-MM-DD"
                                )
                            }
                        )
            elif field in self.required or value is not None:
                if not isinstance(value, str) or "\x00" in value:
                    raise HTTPBadRequest(
                        json_body={"error": f"{field} harus berupa teks valid"}
                    )
                value = value.strip()
                if field in self.required and not value:
                    raise HTTPBadRequest(
                        json_body={"error": f"Field {field} wajib diisi!"}
                    )
            values[field] = value
        return values

    def add(self, request):
        values = self.payload(request, creating=True)
        return self.save(request, self.model(), values)

    def update(self, request):
        item = self.find(request)
        values = self.payload(request, creating=False)
        return self.save(request, item, values)

    def save(self, request, item, values):
        session = request.dbsession
        try:
            with session.begin_nested():
                for field, value in values.items():
                    setattr(item, field, value)
                session.add(item)
                session.flush()
        except IntegrityError as error:
            if getattr(error.orig, "pgcode", None) != "23505":
                raise
            raise HTTPBadRequest(
                json_body={"error": f"{self.required[0]} sudah digunakan"}
            )
        return {"success": True, self.name: item.to_dict()}

    def delete(self, request):
        item = self.find(request)
        item_id = item.id
        request.dbsession.delete(item)
        return {
            "success": True,
            "message": (
                f"{self.name.capitalize()} dengan ID {item_id} berhasil dihapus"
            ),
        }
