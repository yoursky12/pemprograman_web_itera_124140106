def includeme(config):
    config.add_route("home", "/", request_method="GET")
    for resource in ("mahasiswa", "matakuliah"):
        collection = f"/api/{resource}"
        detail = collection + "/{id}"
        config.add_route(f"{resource}_list", collection, request_method="GET")
        config.add_route(f"{resource}_detail", detail, request_method="GET")
        config.add_route(f"{resource}_add", collection, request_method="POST")
        config.add_route(f"{resource}_update", detail, request_method="PUT")
        config.add_route(f"{resource}_delete", detail, request_method="DELETE")
