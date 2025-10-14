import dotenv from 'dotenv';
dotenv.config()

const ENV = process.env.NODE_ENV || "development";

let FRONTEND_URI: string;

if(ENV=='development'){
    FRONTEND_URI = "http://localhost:5173";
} else if (ENV=='docker'){
    FRONTEND_URI = 'http://localhost';
}

export { FRONTEND_URI };
export const JWT_PASSWORD = "!23123";


