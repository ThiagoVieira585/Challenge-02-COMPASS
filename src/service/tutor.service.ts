import { Request, Response } from "express";
import Tutor from "../model/tutor.model";

export async function createTutor(req: Request, res: Response) {
  const { name, phone, email, date_of_birth, zip_code, pets } = req.body;

  const tutor = {
    name,
    phone,
    email,
    date_of_birth,
    zip_code,
    pets,
  };

  try {
    await Tutor.create(tutor);

    res.status(201).json({ message: "Sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function readTutor(req: Request, res: Response) {
  try {
    const tutor = await Tutor.find();

    res.status(200).json(tutor);
  } catch (error) {}
}

export async function getById(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const tutor = await Tutor.findOne({ _id: id });

    res.status(200).json(tutor);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function deleteById(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const tutor = await Tutor.deleteOne({ _id: id });
    res.status(204).json({ tutor, message: "Tutor apagado" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function updateById(req: Request, res: Response) {
  const id = req.params.id;

  const { name, phone, email, date_of_birth, zip_code, pets } = req.body;

  const tutors = {
    name,
    phone,
    email,
    date_of_birth,
    zip_code,
    pets,
  };
  if (!name || !phone || !email || !date_of_birth || !zip_code || !pets) {
    res.status(400).json({ error: "Todos os campos são obrigatórios" });
    return;
  }
  try {
    const tutor = await Tutor.updateOne({ _id: id }, tutors);

    res.status(200).json(tutor);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
