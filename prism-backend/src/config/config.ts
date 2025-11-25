import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()
const ENV = process.env.NODE_ENV || "development";


export const connecDb = async() => {
    const url = process.env.MONGODB_URI;
    const db_name = process.env.DB_NAME;
    
    if(!url && db_name){
        console.log("database credentials are not defined in environment variables")
    }
    try{
        await mongoose.connect(`${url}/${db_name}`)
        .then(()=>{console.log("mongodb is connected")})
    }catch(e){
        console.error("failed to connect to MongoDB", e);
        process.exit(1);
    }
}


let FRONTEND_URI: any;

if(ENV=='development'){
    FRONTEND_URI = "http://localhost:5173";
} else if (ENV=='docker'){
    FRONTEND_URI = 'http://localhost';
} else {
    FRONTEND_URI = process.env.NODE_ENV || "http://localhost:5173"
}

export {FRONTEND_URI};