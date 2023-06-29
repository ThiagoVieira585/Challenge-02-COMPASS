import { _Tutor } from '../model/tutor.model';
import Tutor from '../model/tutor.model';

class CreateTutorService {
  async execute(tutorData: _Tutor) {
    try {
      const tutor = await Tutor.create(tutorData);
      return tutor;
    } catch (error) {
      throw new Error('Erro ao criar o tutor');
    }
  }
}

export { CreateTutorService };
