
//dev, prod
let env = "prod" 
let envUrl = env === "prod" 
    ? "https://components.pharbers.com/dev/offweb/public"
    : "https://components.pharbers.com/prod/offweb/public"
export default envUrl
