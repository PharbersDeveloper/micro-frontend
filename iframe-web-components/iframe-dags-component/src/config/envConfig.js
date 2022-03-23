
//dev, prod
const env = "dev" 

const envUrl = env === "dev" 
    ? "https://components.pharbers.com/dev/general/public"
    : "https://components.pharbers.com/prod/general/public"
export default envUrl
