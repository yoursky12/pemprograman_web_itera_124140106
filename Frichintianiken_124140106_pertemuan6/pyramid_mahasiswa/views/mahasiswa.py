from pyramid.view import view_config

from ..models import Mahasiswa
from . import Resource

resource = Resource(
    Mahasiswa,
    "mahasiswa",
    ["nim", "nama", "jurusan"],
    optional=("tanggal_lahir", "alamat"),
)

@view_config(route_name="mahasiswa_list", request_method="GET", renderer="json")
def mahasiswa_list(request):
    return resource.list(request)


@view_config(route_name="mahasiswa_detail", request_method="GET", renderer="json")
def mahasiswa_detail(request):
    return resource.detail(request)


@view_config(route_name="mahasiswa_add", request_method="POST", renderer="json")
def mahasiswa_add(request):
    return resource.add(request)


@view_config(route_name="mahasiswa_update", request_method="PUT", renderer="json")
def mahasiswa_update(request):
    return resource.update(request)


@view_config(route_name="mahasiswa_delete", request_method="DELETE", renderer="json")
def mahasiswa_delete(request):
    return resource.delete(request)
