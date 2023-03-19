import { ROUTES } from '@app/shared/routes';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DefaultBodyType, MockedRequest } from 'msw';
import { generatePath } from 'react-router-dom';
import { TOTAL_COUNT_HEADER_NAME } from 'src/api/contracts/superhero';
import { AllProvidersWrapper } from 'src/tests/AllProvidersWrapper';
import { createSuperhero } from 'src/tests/fixtures/superhero';
import { superheroErrorHandler, superheroHandler } from 'src/tests/serverMocks/heroes';
import { setupMockServer } from 'src/tests/setupMockServer';
import Superheroes from './Superheroes';

// Mocking ROWS_PER_PAGE value so there is no need to create more then 20 mocked superheroes
vi.mock('src/api/queryFunctions/superhero', async () => {
  const mod: object = await vi.importActual('src/api/queryFunctions/superhero');
  return {
    ...mod,
    ROWS_PER_PAGE: 1,
  };
});

/** Mocking RandomSuperheroes because it do requests to the same endpoint which would make noise
 * while testing functionalities on Superheroes
 */
vi.mock('src/app/components/superheroes/components/randomSuperheroes/RandomSuperheroes', () => {
  return { RandomSuperheroes: () => <></> };
});

const navigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const mod: object = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useNavigate: () => navigate,
  };
});

const { waitForRequest, mockServer } = setupMockServer(
  superheroHandler({
    data: [createSuperhero(), createSuperhero({ id: 1, name: 'Tester' })],
    [TOTAL_COUNT_HEADER_NAME]: 2,
  })
);

describe('<Superheroes/>', () => {
  let fixtures: ReturnType<typeof getFixtures>;

  beforeEach(() => {
    fixtures = getFixtures();
  });

  it('searches for heroes filtered by name', async () => {
    fixtures.givenComponentIsRendered();
    await fixtures.thenTableIsRendered();
    await fixtures.whenUserEntersSearchName();
    const request = fixtures.givenCanMakeRequest();
    fixtures.thenRequestWithSearchPhraseIsSent(await request);
  });

  it('changes the page of visible heroes', async () => {
    fixtures.givenComponentIsRendered();
    await fixtures.thenTableIsRendered();
    const request = await fixtures.whenUserChangesPage();
    fixtures.givenCanMakeRequest();
    fixtures.thenRequestWithNewPageIsSent(request);
  });

  it('goes to next page of visible heroes', async () => {
    fixtures.givenComponentIsRendered();
    await fixtures.thenTableIsRendered();
    const request = await fixtures.whenUserGoesToNextPage();
    fixtures.thenRequestWithNextPageIsSent(request);
  });

  it('shows error message if reques returns error', async () => {
    fixtures.givenAPIReturnsError();
    fixtures.givenComponentIsRendered();
    await fixtures.thenErrorMessageisShown();
  });

  it('navigates to details page on row click', async () => {
    fixtures.givenComponentIsRendered();
    await fixtures.thenTableIsRendered();
    await fixtures.whenUserSelectsRow();
    await fixtures.thenUserIsNavigatedToDetailsPage();
  });
});

const getFixtures = () => {
  const testingUser = userEvent.setup();
  const superheroSearchName = 'Batman';
  const newTablePage = 13;

  return {
    givenComponentIsRendered: () => render(<Superheroes />, { wrapper: AllProvidersWrapper }),
    givenCanMakeRequest: () => {
      return waitForRequest('GET', '*/api/heroes');
    },
    givenAPIReturnsError: () => {
      mockServer.use(superheroErrorHandler());
    },
    whenUserEntersSearchName: async () => {
      const searchInput = await screen.findByRole('input', { name: /Search superhero/ });
      await testingUser.type(searchInput, superheroSearchName);
    },
    whenUserChangesPage: async () => {
      const request = waitForRequest('GET', '*/api/heroes');
      const [, pageInput] = await screen.findAllByRole('input');
      await testingUser.type(pageInput, '3');
      return request;
    },
    whenUserGoesToNextPage: async () => {
      const request = waitForRequest('GET', '*/api/heroes');
      const buttonNext = await screen.findByRole('button', { name: 'Next' });
      await testingUser.click(buttonNext);
      return request;
    },
    whenUserSelectsRow: async () => {
      const row = await screen.findAllByRole('row');
      await testingUser.click(row[1]);
    },
    thenTableIsRendered: async () => {
      expect(await screen.findByRole('table')).toBeVisible();
      expect(await screen.findByRole('cell', { name: 'Yoda' })).toBeVisible();
    },
    thenErrorMessageisShown: async () => {
      expect(await screen.findByRole('heading', { name: /Something went wrong, we were not able to load data./ }));
    },
    thenRequestWithSearchPhraseIsSent: (request: MockedRequest<DefaultBodyType>) => {
      expect(request.url.toString()).toEqual(
        `http://localhost:3000/api/heroes?_page=1&_limit=20&name=${superheroSearchName}`
      );
    },
    thenRequestWithNewPageIsSent: (request: MockedRequest<DefaultBodyType>) => {
      expect(request.url.toString()).toEqual(`http://localhost:3000/api/heroes?_page=${newTablePage}&_limit=20`);
    },
    thenRequestWithNextPageIsSent: (request: MockedRequest<DefaultBodyType>) => {
      expect(request.url.toString()).toEqual('http://localhost:3000/api/heroes?_page=2&_limit=20');
    },
    thenUserIsNavigatedToDetailsPage: () => {
      expect(navigate).toHaveBeenCalledWith(generatePath(ROUTES.superhero, { id: createSuperhero().id }));
    },
  };
};
