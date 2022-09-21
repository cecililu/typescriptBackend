import { Router } from "express";
import { getProfileHandler } from "../../controllers/profile";
import {validateToken} from "../../middlewares/validateToken"

const router=Router()

router.post('/profilelocked', validateToken ,getProfileHandler)

export{router as getProfileRouter} 