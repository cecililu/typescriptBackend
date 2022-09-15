import express, { application,Request,Response } from "express" ;
import { indexRouter } from "./routes";
// import cors from "cors";
const app: express.Application =express()




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());

app.use(indexRouter)

export {app}