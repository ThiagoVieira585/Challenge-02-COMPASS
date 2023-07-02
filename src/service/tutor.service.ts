import { Request, Response } from "express";
import Tutor from "../model/tutor.model";

import { _Pet } from "../model/pet.model";
import { _Tutor } from "../model/tutor.model";

export async function createTutor(req: Request, res: Response) {
  const { name, phone, email, passowrd, date_of_birth, zip_code, pets } = req.body;

  const tutor = {
    name,
    phone,
    email,
    passowrd,
    date_of_birth,
    zip_code,
    pets,
  };

  try {
    await Tutor.create(tutor);

    res.status(201).json({ message: "Tutor criado com Sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function readTutor(req: Request, res: Response) {
  try {
    const tutor = await Tutor.find();

    res.status(200).json(tutor);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function getById(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const tutor = await Tutor.findOne({ _id: id });

    res.status(200).json({tutor, message: "Tutor atualizado"});
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function deleteTutor(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const tutor = await Tutor.findById(id);
    if (!tutor) {
      return res.status(404).json({ error: 'Tutor não encontrado' });
    }

    if (tutor.pets.length > 0) {
      return res.status(400).json({ error: 'Não é possível excluir o tutor porque ele possui pets registrados.' });
    }

    await Tutor.deleteOne({ _id: id });

    res.status(204).json({ message: 'Tutor apagado' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}


export async function updateTutor(req: Request, res: Response) {
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
