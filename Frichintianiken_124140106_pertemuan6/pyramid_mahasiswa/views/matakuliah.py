from pyramid.view import view_config

from ..models import Matakuliah
from . import Resource

resource = Resource(
    Matakuliah,
    "matakuliah",
    ["kode_mk", "nama_mk", "sks", "semester"],
    integers=("sks", "semester"),
)

@view_config(route_name="matakuliah_list", request_method="GET", renderer="json")
def matakuliah_list(request):
    return resource.list(request)


@view_config(route_name="matakuliah_detail", request_method="GET", renderer="json")
def matakuliah_detail(request):
    return resource.detail(request)


@view_config(route_name="matakuliah_add", request_method="POST", renderer="json")
def matakuliah_add(request):
    return resource.add(request)


@view_config(route_name="matakuliah_update", request_method="PUT", renderer="json")
def matakuliah_update(request):
    return resource.update(request)


@view_config(route_name="matakuliah_delete", request_method="DELETE", renderer="json")
def matakuliah_delete(request):
    return resource.delete(request)
