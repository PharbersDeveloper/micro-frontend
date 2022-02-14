// eslint-disable-next-line no-unused-vars
export async function phAnalyzeSelectFileEventHandler(e, route) {
	let param = e.detail[0].args.param
	let uri = ""
	switch (e.detail[0].args.callback) {
		case "linkToPage":
			if (param.name === "linkToProject" || param.name == "project") {
				uri = `projects/` + param.projectId
			} else if (param.name === "datasets") {
				uri =
					"dataset-lst?projectName=" +
					param.projectName +
					"&projectId=" +
					param.projectId
			} else if (param.name === "scripts") {
				uri =
					"recipes?projectName=" +
					param.projectName +
					"&projectId=" +
					param.projectId
			} else if (param.name == "flow") {
				uri =
					"flow?projectName=" +
					param.projectName +
					"&projectId=" +
					param.projectId
			} else if (param.name == "airflow") {
				uri =
					"airflow?projectName=" +
					param.projectName +
					"&projectId=" +
					param.projectId
			}
			this.router.transitionTo("shell", uri)
			break
		case "s3UploadFiles":
			if (param.s3UploadMessage.message) {
				let resMessage = {
					tmpname: param.s3UploadMessage.message.refer_name,
					filename: param.s3UploadMessage.message.file_name
				}
				let file = param.s3UploadMessage.message
				param.property.projectId = param.projectId
				param.property.opname = this.cookies.read("account_id")
				param.property.owner = this.cookies.read("account_id")
				param.property.opgroup = this.cookies.read("company_id")
				param.property.showName = decodeURI(
					this.cookies.read("user_name_show")
				)
				//关闭弹框
				e.detail[0].args.element.show = false
				this.random = Math.random()
				//notice回调函数参数
				this.tranParam = {
					file: file,
					property: param.property,
					projectName: param.projectName,
					message: resMessage,
					projectId: param.projectId
				}
				//请求接口
				this.updateDataset(
					file,
					param.property,
					param.projectName,
					resMessage,
					param.projectId,
					"uploaded"
				)
			}
			break
		default:
			console.log("submit event to parent")
	}
}
