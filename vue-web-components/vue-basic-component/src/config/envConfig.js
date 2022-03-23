
//dev, prod
let env = "dev" 
let envUrl = env === "dev" 
    ? "https://components.pharbers.com/dev/offweb/public"
    : "https://components.pharbers.com/prod/offweb/public"
export default envUrl
