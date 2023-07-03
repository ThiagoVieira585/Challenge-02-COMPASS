import { Request, Response } from "express";
import Tutor from "../model/tutor.model";
import bcrypt from "bcrypt";
import { _Pet } from "../model/pet.model";
import { _Tutor } from "../model/tutor.model";

export async function createTutor(req: Request, res: Response) {
  const { name, phone, email, password, date_of_birth, zip_code, pets } =
    req.body;

  // criação da senha
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const tutor = {
    name,
    phone,
    email,
    password: passwordHash,
    date_of_birth,
    zip_code,
    pets,
  };
  const requiredFields = [
    "name",
    "phone",
    "email",
    "password",
    "date_of_birth",
    "zip_code",
    "pets",
  ];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res
        .status(400)
        .json({ error: `O campo '${field}' é obrigatório` });
    }
  }

  const tutorExists = await Tutor.findOne({ email: email });

  //Verificação do email do tutor
  if (tutorExists) {
    return res
      .status(400)
      .json({ error: "Já existe um tutor criado com esse email." });
  }

  try {
    await Tutor.create(tutor);

    res.status(201).json({ message: "Tutor criado com Sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function readTutor(req: Request, res: Response) {
  try {
    const tutor = await Tutor.find().select('-password');;

    res.status(200).json(tutor);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function getById(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const tutor = await Tutor.findOne({ _id: id });

    res.status(200).json({ tutor, message: "Tutor atualizado" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function deleteTutor(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const tutor = await Tutor.findOne({ _id: id });
    if (!tutor) {
      return res.status(404).json({ error: "Id do tutor não encontrado" });
    }

    if (tutor.pets.length > 0) {
      return res
        .status(400)
        .json({
          error:
            "Não é possível excluir o tutor porque ele possui pets registrados.",
        });
    }

    await Tutor.deleteOne({ _id: id });

    res.status(204).json({ message: "Tutor apagado" });
  } catch (error) {
    if (error === "CastError") {
      return res.status(400).json({ error: "ID inválido" });
    }
    res.status(500).json({ message: "Error" });
  }
}

export async function updateTutor(req: Request, res: Response) {
  const id = req.params.id;

  const { name, phone, email, date_of_birth, zip_code } = req.body;

  const tutors = {
    name,
    phone,
    email,
    date_of_birth,
    zip_code
  };
  if (!name || !phone || !email || !date_of_birth || !zip_code ) {
    res.status(400).json({ error: "Todos os campos são obrigatórios" });
    return;
  }
  
  const tutor = await Tutor.findById(id);
  

  if (!tutor) {
    return res.status(404).json({error: "Tutor não encontrado.", tutor})
  }

  try {
    const tutor = await Tutor.updateOne({ _id: id }, tutors);

    res.status(200)
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
