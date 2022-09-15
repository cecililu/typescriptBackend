import { Router } from "express";

const router=Router();

router.post('/signin',signInHandler)



export{router as signInHandlerRoute}