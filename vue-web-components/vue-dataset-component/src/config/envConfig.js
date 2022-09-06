
//dev, prod
const env = "dev" 
const staticFilePath = env === "dev" 
    ? "https://components.pharbers.com/dev/deploy/public"
    : "https://components.pharbers.com/prod/deploy/public"
const hostName =
	env === "dev" ? "https://apidev.pharbers.com" : "https://api.pharbers.com"
const actionTableName = env === "dev" ? "action_dev" : "action"

export { staticFilePath, hostName, actionTableName }
