import mongoose from "mongoose";
import 'dotenv/config'
import { DB_NAME } from "../constants.js";


const connectDb = async () => {
    try {
        const dbConnection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("mongodb connected " , dbConnection.connection.host);
    } catch (error) {
        console.log("DB connection error : ", error);
        process.exit(1)
    }
}

export default connectDb;
