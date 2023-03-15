import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from './routes/users.js'


const app = express()
dotenv.config()

const connect = () => {
    mongoose
      .connect(process.env.MONGO)
      .then(() => {
        console.log("Connected to DB");
      })
      .catch((err) => {
        throw err;
      });
  };

  app.use(express.json())
  app.use("/api/users", userRoutes);

//videoApplication
//06nU6SGJz8IlOau7

app.listen(8000,()=>{
    connect ()
    console.log("Connected to Server!")
})