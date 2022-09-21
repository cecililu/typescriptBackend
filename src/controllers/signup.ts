import express, { Request,Response } from "express" ;
import { BadRequest } from "../common/errors/BadRequest";
import { NotAuthorized } from "../common/errors/NotAuthorized";
import { Role, User } from "../models/user";
import  jwt from 'jsonwebtoken';
import { genSaltSync,hashSync } from "bcrypt";
const signUpHandler=async(req:Request,res:Response)=>{
   
        const { email, password, name ,role} = req.body;
        const salt = genSaltSync(10); 
        const hash = hashSync(password, salt);
        try {
          const user = await User.build({
            email,
            password,
            name,
            role: Role.user,
          }).save();
      
          const accessToken = jwt.sign(
            {
              email: email,
              id: user.id,
            },
            "secret"
          );
      
          res.status(201).send({
            accessToken,
            data: user,
          });
        } catch (error) {
          throw new NotAuthorized(
            (error as any).message ? (error as any).message : "Something bad"
          );
        }
      };
      

export default signUpHandler;