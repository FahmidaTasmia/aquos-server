import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

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

//videoApplication
//06nU6SGJz8IlOau7

app.listen(8800,()=>{
    connect ()
    console.log("Connected to Server!")
})