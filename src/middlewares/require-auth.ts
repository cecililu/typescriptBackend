import { NextFunction ,Request,Response} from "express";
import { NotAuthorized } from "../common/errors/NotAuthorized";
import { User } from "../models/user";

export const requireAuth=async(req:Request,res:Response,next:NextFunction)=>{
    if(!req.currentUser){
       throw new NotAuthorized('Not authorized')
    }
    const existUserData=await User.findById(req.currentUser.id)
    if (!existUserData){
        throw new NotAuthorized('Not authorized')
    }
    req.userData=existUserData
    next()
}