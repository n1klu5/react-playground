export type ROUTES_NAMES = 'superheroes' | 'superheroe' | 'notFound';

export const ROUTES: Record<ROUTES_NAMES, string> = {
  superheroes: '/superheroes',
  superheroe: '/superheroe/:id',
  notFound: '/not-found',
};
