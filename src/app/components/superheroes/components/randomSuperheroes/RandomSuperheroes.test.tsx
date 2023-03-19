import { ROUTES } from '@app/shared/routes';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DefaultBodyType, MockedRequest } from 'msw';
import { generatePath } from 'react-router-dom';
import { AllProvidersWrapper } from 'src/tests/AllProvidersWrapper';
import { createSuperhero } from 'src/tests/fixtures/superhero';
import { superheroHandler } from 'src/tests/serverMocks/heroes';
import { setupMockServer } from 'src/tests/setupMockServer';
import { RandomSuperheroes } from './RandomSuperheroes';

const navigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const mod: object = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useNavigate: () => navigate,
  };
});

const { waitForRequest } = setupMockServer(
  superheroHandler([
    createSuperhero(),
    createSuperhero({ id: 2, name: 'Yoda-2' }),
    createSuperhero({ id: 3, name: 'Yoda-3' }),
  ])
);

describe('<RandomSuperheroes/>', () => {
  let fixtures: ReturnType<typeof getFixtures>;

  beforeEach(() => {
    fixtures = getFixtures();
  });

  it('show 3 random superheroes', async () => {
    const request = fixtures.givenCanMakeRequest();
    fixtures.givenComponentIsRendered();
    await fixtures.thenSuperheroesAreRendered();
    fixtures.thenRequestWithRandomIdsIsSent(await request);
  });

  it('navigat to details page on superheroe click', async () => {
    fixtures.givenComponentIsRendered();
    await fixtures.thenSuperheroesAreRendered();
    await fixtures.whenUserSelectsSuperhero();
    fixtures.thenUserIsNavigatedToDetailsPage();
  });
});

const getFixtures = () => {
  const totalSupeheroesCount = 450;
  const superheroName = 'Yoda';
  const superheroName2 = 'Yoda-2';
  const superheroName3 = 'Yoda-3';
  const testingUser = userEvent.setup();

  return {
    givenComponentIsRendered: () =>
      render(<RandomSuperheroes totalCount={totalSupeheroesCount} />, { wrapper: AllProvidersWrapper }),
    givenCanMakeRequest: () => {
      return waitForRequest('GET', '*/api/heroes');
    },
    whenUserSelectsSuperhero: async () => {
      const superhero = await screen.findByText(superheroName);
      await testingUser.click(superhero);
    },
    thenSuperheroesAreRendered: async () => {
      expect(await screen.findByText(superheroName)).toBeVisible();
      expect(await screen.findByText(superheroName2)).toBeVisible();
      expect(await screen.findByText(superheroName3)).toBeVisible();
    },
    thenRequestWithRandomIdsIsSent: (request: MockedRequest<DefaultBodyType>) => {
      expect(request.url.toString()).toEqual(expect.stringContaining('http://localhost:3000/api/heroes?id='));
    },
    thenUserIsNavigatedToDetailsPage: () => {
      expect(navigate).toHaveBeenCalledWith(generatePath(ROUTES.superhero, { id: createSuperhero().id }));
    },
  };
};
