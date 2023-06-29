import express, { json } from "express";
import { Request, Response } from "express";
import { createTutor, getById, readTutor } from "../controller/tutor.controler";

const router = express.Router();
router.use(express.json())

router.get("/tutors", readTutor,  (req: Request, res: Response) => {
});
router.get("/tutors/:id", getById, (req: Request, res: Response) =>{
});
router.post("/tutors", createTutor, (req: Request, res: Response) =>{
});



export default router;
