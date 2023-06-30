import express, { json } from "express";
import { Request, Response } from "express";
import { createPet } from "../service/pet.service";

const router = express.Router();
router.use(express.json())

router.post("/pet/:tutorId", createPet, (req:Request, res:Response) =>{
})
router.put("/pet/:petId/tutor/:tutorId", (req:Request, res:Response) =>{
})
export default router;