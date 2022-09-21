import express, { application,NextFunction,Request,Response } from "express" ;
import { NotAuthorized } from "../common/errors/NotAuthorized";

const jwt=require('jsonwebtoken');

declare namespace Express {
    export interface Request {
        user: any;
    }
    export interface Response {
        user: any;
    }
  }

const validateToken= (req:any,res:Response,next:NextFunction)=>{
   try{
    const token=req.header('Authorization')?.split(' ')[1]
    const verified= jwt.verify(token,'secret')
    console.log(verified)
   // req.user=verified
   // console.log(req.user)
   
   }catch(error){
    throw new NotAuthorized((error as any).message ? (error as any).message : "Something bad")
  
}
 }
 export {validateToken}