import { Router } from "express";
import { signInHandlerRoute } from "../../signin";

const router=Router()
router.use(signInHandlerRoute);
export {router as authRouter};
