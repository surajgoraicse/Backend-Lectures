import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import 'dotenv/config'

import connectDb from "./db/index.js";

/*
import express from "express";
const app = express();

; (async () => {
    try {
        const db_connect_response = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(db_connect_response);
        app.on("error", (error) => {
          console.log("error : " , error);
          throw error
        })
        
        app.listen(process.env.PORT, () => {
            console.log("App is listening at port : " , process.env.PORT);
        })
    } catch (error) {
        console.error("Error : " , error)
        throw error;
    }
})();
*/

connectDb()
    .then(() => {
        const port = process.env.PORT || 8000;
        app.on("error", (error) => {
            console.log("express error : " , error);
            throw error
        })
        app.listen(port, () => {
            console.log("app is listening at port : ", port);
        })
    })
    .catch(() => {
        console.log("Mongodb connection failed : !!!!");
        // this won't log as process has already exited using process.exit(1) in db file
    })
