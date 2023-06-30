import { Request, Response } from 'express';
import { _Pet } from '../model/pet.model';
import Tutor, { _Tutor } from '../model/tutor.model';
import Pet  from '../model/pet.model';

export async function createPet(req: Request, res: Response) {
  const tutorId = req.params.tutorId;

  const { name, species, category, weight, date_of_birth } = req.body;

  if (!name || !species || !category || !weight || !date_of_birth) {
    return res.status(400).json({ error: 'Todos os campos requeridos devem ser fornecidos.' });
  }

  try {
    const pets = {
      name,
      species,
      category,
      weight,
      date_of_birth,
    };

    const pet = new Pet(pets);
    await pet.save();

    const tutor: _Tutor | null = await Tutor.findById(tutorId);

    if (!tutor) {
      return res.status(404).json({ error: 'Tutor não encontrado.' });
    }

    tutor.pets.push(pet._id);
    await tutor.save();

    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
