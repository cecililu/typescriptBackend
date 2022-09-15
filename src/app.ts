import express, { application,Request,Response } from "express" ;
// import cors from "cors";
const app: express.Application =express()




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());

app.get('/api/v1',(req: Request,res: Response)=>{
    res.send("HEllo world")
})

export {app}