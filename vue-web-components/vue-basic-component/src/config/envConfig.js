
//dev, prod
const env = "prod" 
const envUrl = env === "dev" 
    ? "https://components.pharbers.com/dev/offweb/public"
    : "https://components.pharbers.com/prod/offweb/public"
export default envUrl
