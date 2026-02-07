import { app } from "./configApp.ts";
import dotenv from "dotenv";

const env = process.env.NODE_ENV
dotenv.config({path: `.env.${env}`})


app.listen(3535, () => {
  console.log("Listening");
})