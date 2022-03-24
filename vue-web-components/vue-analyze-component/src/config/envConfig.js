
//dev, prod
const env = "prod" 
const envUrl = env === "dev" 
    ? "https://components.pharbers.com/dev/deploy/public"
    : "https://components.pharbers.com/prod/deploy/public"
export default envUrl
