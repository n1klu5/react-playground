import { rest } from 'msw';
import { Superhero } from 'src/api/contracts/superhero';
import { createSuperhero } from 'src/tests/fixtures/superhero';

export const superheroHandler = (overrides?: Array<Superhero>) =>
  rest.get('*/api/heroes', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(overrides ?? [createSuperhero()]));
  });
