import express, { json } from "express";
import { Request, Response } from "express";
import { authTutor } from "../service/auth.service"

const router = express.Router();
router.use(express.json())

router.post("/auth", authTutor, ((req:Request, res:Response)=>{
}))

export default router;