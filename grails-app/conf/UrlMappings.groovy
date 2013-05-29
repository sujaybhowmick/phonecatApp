class UrlMappings {
    static mappings = {
        "/"(view:"/index")

        "/rest/phones"(controller: "phone", parseRequest: true){
            action = [GET: "list"]
        }

        "/rest/phones/$id"(controller: "phone", parseRequest: true){
            action = [GET: "show", PUT: "update", DELETE: "delete", POST: "save"]
        }
    }
}
