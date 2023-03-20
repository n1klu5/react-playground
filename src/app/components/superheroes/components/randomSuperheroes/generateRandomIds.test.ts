import { generateRandomIds } from '@app/components/superheroes/components/randomSuperheroes/generateRandomIds';

describe('useRandomSuperheros', () => {
  test.each([
    [0, 0],
    [3, 3],
    [5, 3],
  ])('generateRandomIds(%s) -> generates array of length%s', (total: number, expected: number) => {
    const randomIds = generateRandomIds(total);
    expectTypeOf(randomIds).toBeArray();
    expect(randomIds).toHaveLength(expected);
  });
});
