import express from "express";
 import dotenv from "dotenv";
const app = express()
dotenv.config();


 

app.listen(3000, ()=> {
    console.log("http://localhost:3000/")
})