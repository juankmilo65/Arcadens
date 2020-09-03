import { Injectable } from '@angular/core';
import { GENDERS } from '../../mocks/movie/movie-mocks';

@Injectable()
export class GenderService {
  getGenders() {
    return Promise.resolve(GENDERS);
  }
}
