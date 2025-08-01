import express from "express";
import { ExpressAuth } from "@auth/express"
import GitHub from "@auth/express/providers/github"
 import dotenv from "dotenv";
const app = express()
dotenv.config();

app.get("/", (req, res) => {
  res.send("Servidor de encuestas funcionando ✅");
});

app.set('trust proxy', true)
app.use(
  "/auth",
  ExpressAuth({
      secret: process.env.AUTH_SECRET,
    providers: [
      GitHub({
        clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET,
      }),
    ],
  })
);

 

app.listen(3000, ()=> {
    console.log("http://localhost:3000/")
})