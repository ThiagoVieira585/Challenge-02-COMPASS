import express, { json } from "express";
import { Request, Response } from "express";
import { createTutor, deleteTutor, getById, readTutor, updateTutor } from "../service/tutor.service";
import { checkToken } from "../middleware/token";

const router = express.Router();
router.use(express.json())

router.get("/tutors", readTutor,  (req: Request, res: Response) => {
});
router.get("/tutors/:id", getById, (req: Request, res: Response) =>{
});
router.post("/tutors", createTutor, (req: Request, res: Response) =>{
});
router.delete("/tutors/:id", deleteTutor, checkToken, (req: Request, res: Response) =>{
})
router.put("/tutors/:id", updateTutor, checkToken, (req: Request, res: Response) =>{
})


export default router;
