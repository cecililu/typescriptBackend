import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { request } from "http";
import { RequestValidationError } from "../common/errors/request-validation-error";

export const validateRequest=(req:Request,res:Response,next:NextFunction)=>{
    
    const error=validationResult(req)
     if(!error.isEmpty())
     {
        throw new RequestValidationError(error.array())
     }
}