import { Request, Response } from "express";
import { _Tutor } from "../model/tutor.model";
import Tutor from "../model/tutor.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function authTutor(req: Request, res: Response) {
  const { email, password } = req.body;

  const requiredFields = ["email", "password"];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res
        .status(400)
        .json({ error: `O campo '${field}' é obrigatório` });
    }
  }

  try {
    const tutor = await Tutor.findOne({ email });

    if (!tutor) {
      return res.status(400).json({ error: "Usuário não encontrado." });
    }

    const checkPassword = await bcrypt.compare(password, tutor.password);

    if (!checkPassword) {
      return res.status(401).json({ error: "Senha inválida." });
    }
    
    const secret = "da98dj8219ijkklmkasmdlaJD892km9d3293i90";
    
    const token = jwt.sign(
      {
        id: tutor._id,
      },
      secret
    );
    res.status(200).json({ msg: "Usuário autenticado com sucesso.",token});

  } catch (error) {
    res.status(500).json({ error: error });
  }
}
