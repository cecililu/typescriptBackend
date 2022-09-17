import express, { Request,Response } from "express" ;
import { BadRequest } from "../common/errors/BadRequest";

const signInHandler=async(req:Request,res:Response)=>{
   try{
     const {email,password}=req.body
    //  const existUser=await 
   }  
   catch(error){
   throw new BadRequest( (error as any).message ? (error as any).message :'Something went wrong');
 
   }
}
export default signInHandler;