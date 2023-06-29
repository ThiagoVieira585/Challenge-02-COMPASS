import { Request, Response } from 'express';
import Tutor from '../model/tutor.model';


export async function createTutor(req: Request, res: Response) {
  const {name, phone, email, date_of_birth, zip_code, pets} = req.body

  const tutor = {
      name,
      phone,
      email,
      date_of_birth,
      zip_code,
      pets
  }

  try{

      await Tutor.create(tutor)

      res.status(201).json({message: 'Sucesso'})

  } catch(error){
      res.status(500).json({error: error})
  }
}
