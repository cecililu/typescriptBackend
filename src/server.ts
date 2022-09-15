import { app } from "./app"
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//why
const server = require("http").createServer(app);
console.log("heyyy")

try {
    mongoose.connect('mongodb+srv://cecilghi:<>@cluster0.58v39nr.mongodb.net/typescript-practice'.replace('<>', process.env.DB!));

    console.log("CONNECTED TO DATABASE");
  } catch (error) {
    console.log(
      (error as any).message
        ? (error as any).message
        : "Failed to start the server"
    );
  }

server.listen(3000,()=>{
    console.log("SERVER  RUNNING PORT 3000")
})