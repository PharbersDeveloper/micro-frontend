
//dev, prod
let env = "dev" 
let envUrl = env === "dev" 
    ? "https://components.pharbers.com/dev/general/public"
    : "https://components.pharbers.com/prod/general/public"
export default envUrl
