import { Router } from "express";
import { getProfileHandler } from "../../controllers/profile";
import {validateToken} from "../../middlewares/validateToken.js"

const router=Router()


router.get('/Profilelocked', validateToken,getProfileHandler)


export{router as getProfileRouter}