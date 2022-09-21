import express, { application,NextFunction,Request,Response } from "express" ;
import { NotAuthorized } from "../common/errors/NotAuthorized";
import jwt from "jsonwebtoken";
import { UserDoc } from "../models/user";

interface UserPayload {
    id: string;
    email: string;
    iat: string;
}

declare global {
    namespace Express {
     interface Request {
       currentUser?:UserPayload;   
       userData?:UserDoc 
    }
    }
}

const validateToken= (req:Request,res:Response,next:NextFunction)=>{
    const token=req.headers.authorization!.split(' ')[1]
    try{
    const verified= jwt.verify(token,"secret") as unknown as UserPayload
    req.currentUser = verified
   }catch(error){

    throw new NotAuthorized('Not authorized')
  
}
 }
 export {validateToken}