// eslint-disable-next-line no-unused-vars
export async function phcatelogProjectListEventHandler(e, route) {
    const params = e.detail[0].args.param
    const accessToken = route.cookies.read("access_token")
    switch (e.detail[0].args.callback) {
        case "linkToPage":
            window.open(
                `https://deploy.pharbers.com/projects/${params.pid}?projectName=${params.name}&projectId=${params.pid}`
            )
            break
        case "cerateProject":
            console.log(params)
            if (params) {
                let uri = "https://apiv2.pharbers.com/phcreateproject/projects"
                let body = {
                    data: {
                        type: "projects",
                        attributes: {
                            provider: "pharbers",
                            name: params.name,
                            type: "paas"
                        },
                        relationships: {
                            owner: {
                                data: {
                                    type: "resources",
                                    id: params.id
                                }
                            }
                        }
                    }
                }
                let options = {
                    method: "POST",
                    headers: {
                        Authorization: accessToken,
                        "Content-Type": "application/vnd.api+json",
                        accept: "application/vnd.api+json"
                    },
                    body: JSON.stringify(body)
                }

                route.loadingService.loading.style.display = "flex"
                route.loadingService.loading.style["z-index"] = 2

                let results = await fetch(uri, options).then((res) =>
                    res.json()
                )
                if (results.data.id) {
                    alert("创建项目成功！")
                    window.location.reload()
                }
                route.loadingService.loading.style.display = "none"
            }
            break
        default:
            console.log("submit event to parent")
    }
}
