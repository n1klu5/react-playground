import { Superhero } from '../contracts/superhero';
import { getRequest } from '../http';

export const superherosRequest = {
  queryKeys: ['superheros'],
  getRequest: () => getRequest<Superhero[], undefined>('heroes'),
};
