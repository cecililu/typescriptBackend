import express, { application,Request,Response } from "express" ;

const app: express.Application =express()

app.get('/api/v1',(req: Request,res: Response)=>{
    res.send("HEllo world")
})


app.listen(3000,()=>{
    console.log("SERVER UP AND RUNNING")
})