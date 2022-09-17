import { Router } from "express";
import signInHandler from "../../controllers/signin";

const router=Router();

router.post('/signin',signInHandler)


export{router as signInHandlerRoute}