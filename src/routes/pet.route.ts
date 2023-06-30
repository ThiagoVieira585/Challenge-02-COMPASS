import express, { json } from "express";
import { Request, Response } from "express";
import { createPet, updatePet, deletePet } from "../service/pet.service";

const router = express.Router();
router.use(express.json())

router.post("/pet/:tutorId", createPet, (req:Request, res:Response) =>{
});
router.put("/pet/:petId/tutor/:tutorId", updatePet, (req:Request, res:Response) =>{
});
router.delete("/pet/:petId/tutor/:tutorId", deletePet, (req:Request, res:Response) =>{
});
export default router;