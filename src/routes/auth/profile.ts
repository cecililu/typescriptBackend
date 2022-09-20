import { Router } from "express";
import { getProfileHandler } from "../../controllers/profile";


const router=Router()


router.get('/Profilelocked',getPrfileHandler)

export{router as getProfileRouter}