import { Router } from "express";
import signUpHandler from "../../controllers/signup";

const router=Router();



router.post('/signup',signUpHandler)


export{router as signUpHandlerRoute}