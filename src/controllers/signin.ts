import express, { Request,Response } from "express" ;
import { JsonWebTokenError } from "jsonwebtoken";
import { BadRequest } from "../common/errors/BadRequest";
import { NotAuthorized } from "../common/errors/NotAuthorized";
import { User } from "../models/user";
import {sign} from 'jsonwebtoken';
import {compare} from 'bcrypt';

const signInHandler=async(req:Request,res:Response)=>{
   try{
     const {email,password}=req.body
    
     const existUser=await User.findOne({email})
     if(!existUser) throw new NotAuthorized('no user')
   //   const salt = genSaltSync(10); 
   //   const hash = hashSync(password, salt);
     const validpass= await compare(password ,existUser.password)
    if(!validpass){
      throw new NotAuthorized('pasword invalid')
    } 
   const accessToken=sign(
      {
         email: email,
         id:existUser.id
      },'secret'
     )

     res.status(200).send({
      accessToken,

      data:"ok token sent",
    });
   }  
   catch(error){
    throw new BadRequest( (error as any).message ? (error as any).message :'Something went wrong');
 
   }
}
export default signInHandler;