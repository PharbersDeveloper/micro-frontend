
//dev, prod
let env = "prod" 
let envUrl = env === "prod" 
    ? "https://components.pharbers.com/dev/general/public"
    : "https://components.pharbers.com/prod/general/public"
export default envUrl
