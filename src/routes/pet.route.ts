import express, { json } from "express";
import { Request, Response } from "express";
import { createPet, updatePet, deletePet } from "../service/pet.service";
import { checkToken } from "../middleware/token";

const router = express.Router();
router.use(express.json())

router.post("/pet/:tutorId", checkToken, createPet,  (req:Request, res:Response) =>{
});
router.put("/pet/:petId/tutor/:tutorId", checkToken,updatePet,  (req:Request, res:Response) =>{
});
router.delete("/pet/:petId/tutor/:tutorId", checkToken, deletePet, (req:Request, res:Response) =>{
});
export default router;