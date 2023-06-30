import mongoose, { Schema, Document } from 'mongoose';
import { _Pet } from './pet.model';
import Pet from './pet.model';

export interface _Tutor extends Document {
  name: string;
  phone: string;
  email: string;
  date_of_birth: string;
  zip_code: string;
  pets: _Pet[];
}

const TutorSchema = new Schema<_Tutor>({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  date_of_birth: { type: String, required: true },
  zip_code: { type: String, required: true },
  pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }], 
});

const Tutor = mongoose.model<_Tutor>('Tutor', TutorSchema);

export default Tutor;
