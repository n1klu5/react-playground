import { rest } from 'msw';
import { Superhero, TOTAL_COUNT_HEADER_NAME } from 'src/api/contracts/superhero';
import { createSuperhero } from 'src/tests/fixtures/superhero';

export const superheroHandler = (
  overrides?: Array<Superhero> | { data: Array<Superhero>; [TOTAL_COUNT_HEADER_NAME]: number }
) =>
  rest.get('*/api/heroes', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(overrides ?? [createSuperhero()]));
  });

export const superheroErrorHandler = () =>
  rest.get('*/api/heroes', (req, res, ctx) => {
    return res(ctx.status(404), ctx.json([]));
  });
