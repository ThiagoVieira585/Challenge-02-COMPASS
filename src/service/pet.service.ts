import { Request, Response } from "express";
import { _Pet } from "../model/pet.model";
import Tutor, { _Tutor } from "../model/tutor.model";
import Pet from "../model/pet.model";

export async function createPet(req: Request, res: Response) {
  const tutorId = req.params.tutorId;

  const { name, species, category, weight, date_of_birth } = req.body;

  if (!name || !species || !category || !weight || !date_of_birth) {
    return res
      .status(400)
      .json({ error: "Todos os campos requeridos devem ser fornecidos." });
  }

  try {
    const petData = {
      name,
      species,
      category,
      weight,
      date_of_birth,
    };
    const tutor: _Tutor | null = await Tutor.findById(tutorId);
    const pet = new Pet(petData);
    if (!tutor) {
      await pet.deleteOne(); // Remove o pet criado anteriormente, já que o tutor não foi encontrado
      return res.status(404).json({ error: "Tutor não encontrado." });
    }
    
    await pet.save();

    

    
    tutor?.pets.push(pet);
    await tutor?.save();

    res.status(201).json({ message: "Pet criado!" });

  } catch (error) {
    res.status(500).json({ error: error });
  }
}


export async function updatePet(req: Request, res: Response) {
  const idTutor = req.params.tutorId;
  const idPet = req.params.petId;

  const { name, species, category, weight, date_of_birth } = req.body;

  const pets = {
    name,
    species,
    category,
    weight,
    date_of_birth,
  };

  if (!name || !species || !category || !weight || !date_of_birth) {
    return res
      .status(400)
      .json({ error: "Todos os campos requeridos devem ser preenchidos." });
  }

  try {
    const tutor: _Tutor | null = await Tutor.findById(idTutor);

    if (!tutor) {
      return res.status(404).json({ error: "Tutor não encontrado." });
    }

    const pet = await Pet.findById(idPet);

    if (!pet) {
      return res.status(404).json({ error: "Pet não encontrado." });
    }

    const updatedPet = await Pet.updateOne({ _id: idPet }, pets);

    res.status(200).json({ pet: updatedPet, message: "Pet atualizado" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
export async function deletePet(req: Request, res: Response) {
  const tutorId = req.params.tutorId;
  const petId = req.params.petId;

  try {
    const tutor = await Tutor.findById(tutorId);
    if (!tutor) {
      return res.status(404).json({ error: 'Tutor não encontrado' });
    }

    const petIndex = tutor.pets.findIndex((pet: _Pet) => pet._id.toString() === petId);
    if (petIndex === -1) {
      return res.status(404).json({ error: 'Pet não encontrado' });
    }

    tutor.pets.splice(petIndex, 1);
    await tutor.save();

    await Pet.findByIdAndDelete(petId);

    res.status(204).json({ message: 'Pet removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}