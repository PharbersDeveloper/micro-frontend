import { hostName } from "../config/envConfig"

// eslint-disable-next-line no-unused-vars
export async function phProjectsProjectsEventHandler(e, route) {
    const params = e.detail[0].args.param
    const accessToken = route.cookies.read("access_token")
    const tenantId = route.cookies.read("company_id")
    const dealResourceStartEventName = "dealResourceStart"
    const dealResourceStopEventName = "dealResourceStart"
    const cookiesOptions = {
        domain: ".pharbers.com",
        path: "/"
    }
    switch (e.detail[0].args.callback) {
        case "linkToPage":
            window.open(
                `https://deploy.pharbers.com/projects/${params.pid}?projectName=${params.name}&projectId=${params.pid}`
            )
            break
        case "cerateProject":
            if (params) {
                let uri = `${hostName}/phplatform/projects`
                let body = {
                    data: {
                        type: "projects",
                        attributes: {
                            provider: "pharbers",
                            name: params.name,
                            type: "paas",
                            owner: tenantId
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
        case "dealResourceStart":
            route.element = e.detail[0].args.element
            route.cookies.write("tenantTraceId", params.traceId, cookiesOptions)
            route.element.datasource.statusCode = 1
            route.noticeService.defineAction({
                type: "iot",
                remoteResource: "notification",
                runnerId: "",
                id: params.traceId,
                eventName: dealResourceStartEventName,
                projectId: "projectid",
                ownerId: route.cookies.read("account_id"),
                callBack: dealResourceStartCallback
            })
            break
        case "dealResourceStop":
            route.element = e.detail[0].args.element
            route.element.datasource.statusCode = 4
            route.noticeService.defineAction({
                type: "iot",
                remoteResource: "notification",
                runnerId: "",
                id: params.traceId,
                eventName: dealResourceStopEventName,
                projectId: "projectid",
                ownerId: route.cookies.read("account_id"),
                callBack: dealResourceStopCallback
            })
            break
        default:
            console.log("submit event to parent")
    }
    function dealResourceStartCallback(param, payload) {
        const { message, status } = JSON.parse(payload)
        console.log(message, status)
        console.log(route.element)
        route.element.datasource.statusCode = 1
        const {
            cnotification: { error }
        } = JSON.parse(message)

        if (status == "succeed") {
            route.element.datasource.statusCode = 2
            alert("启动资源成功")
        } else if (status == "failed") {
            let errorObj = error !== "" ? JSON.parse(error) : ""
            let msg =
                errorObj["message"]["zh"] !== ""
                    ? errorObj["message"]["zh"]
                    : "启动资源失败，请重新操作！"
            alert(msg)
        }
        route.loadingService.loading.style.display = "none"
    }
    function dealResourceStopCallback(param, payload) {
        const { message, status } = JSON.parse(payload)
        console.log(message, status)
        console.log(route.element)
        route.element.datasource.statusCode = 4
        const {
            cnotification: { error }
        } = JSON.parse(message)

        if (status == "succeed") {
            route.element.datasource.statusCode = 0
            alert("关闭资源成功")
        } else if (status == "failed") {
            let errorObj = error !== "" ? JSON.parse(error) : ""
            let msg =
                errorObj["message"]["zh"] !== ""
                    ? errorObj["message"]["zh"]
                    : "关闭资源失败，请重新操作！"
            alert(msg)
        }
        route.loadingService.loading.style.display = "none"
    }
}
