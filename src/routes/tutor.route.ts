import express, { json } from "express";
import { Request, Response } from "express";
import { createTutor } from "../controller/tutor.controler";

const router = express.Router();
router.use(express.json())

router.get("/tutors",  (req: Request, res: Response) => {
  // Lógica da rota
  res.json({ message: "Teste tutor" });
});
router.post("/tutors", createTutor, (req: Request, res: Response) =>{
})



export default router;
