import mongoose, { Schema, Document } from 'mongoose';

export interface _Pet extends Document {
  name: string;
  species: string;
  category: string;
  weight: number;
  date_of_birth: Date;
}

const PetSchema = new Schema<_Pet>({
  name: { type: String, required: true },
  species: { type: String, required: true },
  category: { type: String, required: true },
  weight: { type: Number, required: true },
  date_of_birth: { type: Date, required: true },
});

const Pet = mongoose.model<_Pet>('Pet', PetSchema);

export default Pet;
