import { Router } from "express";
import { getProfileRouter } from "./profile";
import { signInHandlerRoute } from "./signin";
import { signUpHandlerRoute } from "./signup";

const router=Router()

router.use(signInHandlerRoute);
router.use(signUpHandlerRoute);
router.use(getProfileRouter);

export {router as authRouter};
