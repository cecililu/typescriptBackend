import { app } from "./app"

//why
const server = require("http").createServer(app);
server.listen(3000,()=>{
    console.log("SERVER  RUNNING PORT 3000")
})