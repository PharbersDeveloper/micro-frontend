
//dev, prod
let env = "prod" 
let envUrl = env === "prod" 
    ? "https://components.pharbers.com/dev/offweb/public"
    : "https://components.pharbers.com/release/offweb/public"
export default envUrl
