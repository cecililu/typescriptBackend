import { Router } from "express";
import { authRouter } from "./auth";


const router=Router();

router.use('/api/v1/auth',authRouter);

export {router as indexRouter};