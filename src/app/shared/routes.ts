export type ROUTES_NAMES = 'superheroes' | 'superhero' | 'notFound';

export const ROUTES: Record<ROUTES_NAMES, string> = {
  superheroes: '/superheroes',
  superhero: '/superhero/:id',
  notFound: '/not-found',
};
