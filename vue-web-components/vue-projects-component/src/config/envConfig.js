
//dev, prod
const env = "dev"
const staticFilePath = env === "dev"
    ? "https://components.pharbers.com/dev/general/public"
    : "https://components.pharbers.com/prod/general/public"
const hostName =
	env === "dev" ? "https://apidev.pharbers.com" : "https://apiv2.pharbers.com"
export { staticFilePath, hostName }

