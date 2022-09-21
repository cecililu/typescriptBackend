import { resolveSoa } from "dns";
import { Response,Request, NextFunction } from "express";
import { NotAuthorized } from "../common/errors/NotAuthorized";
import { Role } from "../models/user";



export const restricTo=(roles:Role[])=>(req:Request,res:Response,next:NextFunction)=>{
   if (!roles.includes(req.userData!.role)){
    throw new NotAuthorized('Not authorized')
   }
   next()
}