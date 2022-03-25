
//dev, prod
const env = "prod" 
const staticFilePath = env === "dev" 
    ? "https://components.pharbers.com/dev/offweb/public"
    : "https://components.pharbers.com/prod/offweb/public"
const hostName =
	env === "dev" ? "https://apidev.pharbers.com" : "https://apiv2.pharbers.com"
export { staticFilePath, hostName }
