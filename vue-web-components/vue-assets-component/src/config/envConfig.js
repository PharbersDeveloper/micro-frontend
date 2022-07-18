
//dev, prod
const env = "prod"
const staticFilePath = env === "dev"
    ? "https://components.pharbers.com/dev/general/public"
    : "https://components.pharbers.com/prod/general/public"
const hostName =
	env === "dev" ? "https://apidev.pharbers.com" : "https://api.pharbers.com"
export { staticFilePath, hostName }

