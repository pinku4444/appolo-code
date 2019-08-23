import { config } from 'dotenv';
config();

const envVars = process.env;

const configuration = Object.freeze({

    port : envVars.PORT,
    serviceUrl : envVars.SERVICE_URL
    
}); 


export default configuration;