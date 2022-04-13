import { hostName } from "../config/envConfig"

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
            /**
             * 1. 创建resource
             * 2. 创建project，将rsource作为关联关系传入
             */
            if (params) {
                let resourceBody = {
                    created: new Date(),
                    name: "project",
                    resourceType: "standalone",
                    tenant: "zudIcG_17yj8CEUoCTHg",
                    concrets: [
                        JSON.stringify({
                            hardware: [
                                {
                                    type: "ec2",
                                    count: 1,
                                    attribute: {
                                        vcores: 4,
                                        memeory: 32
                                    }
                                }
                            ],
                            applications: [
                                {
                                    name: "airflow",
                                    uri: "/airflow"
                                },
                                {
                                    name: "file-upload",
                                    uri: "/upload"
                                },
                                {
                                    name: "jupyter",
                                    uri: "/jupyter"
                                },
                                {
                                    name: "clickhouse",
                                    uri: "/ch"
                                }
                            ]
                        })
                    ]
                }
                let resource = await route.store
                    .createRecord("resource", resourceBody)
                    .save()
                console.log(resource)
                let uri = `${hostName}/phcreateproject/projects`
                let body = {
                    data: {
                        type: "projects",
                        attributes: {
                            provider: "pharbers",
                            name: params.name,
                            type: "paas",
                            owner: params.id
                        },
                        relationships: {
                            resources: {
                                data: {
                                    type: "resources",
                                    id: resource.id
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
