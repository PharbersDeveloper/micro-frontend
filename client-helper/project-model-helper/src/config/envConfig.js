
//dev, prod
const env = "dev" 
const envUrl = env === "dev" 
    ? "https://components.pharbers.com/dev/deploy/public"
    : "https://components.pharbers.com/prod/deploy/public"
export { envUrl }
