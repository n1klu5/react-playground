import { ROUTES } from '@app/shared/routes';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';
import { AllProvidersWrapper } from 'src/tests/AllProvidersWrapper';
import { superheroHandler } from 'src/tests/serverMocks/heroes';
import { setupMockServer } from 'src/tests/setupMockServer';
import Superhero from './Superhero';

const onClickLink = vi.fn();
vi.mock('react-router-dom', async () => {
  const mod: object = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useParams: () => ({
      id: '2',
    }),
    Link: ({ to, children }: { to: string; children: ReactNode }) => (
      <div onClick={() => onClickLink(to)}>{children}</div>
    ),
  };
});

setupMockServer(superheroHandler());

describe('<Superhero />', () => {
  let fixtures: ReturnType<typeof getFixtures>;

  beforeEach(() => {
    fixtures = getFixtures();
  });

  it('navigate to superheores list after user clicks on back button', async () => {
    fixtures.givenComponentIsRendered();
    await fixtures.thenDetailsAreVisible();
    await fixtures.whenUserClickBackButton();
    fixtures.thenRouteIsChanged();
  });
});

const getFixtures = () => {
  return {
    givenComponentIsRendered: () => render(<Superhero />, { wrapper: AllProvidersWrapper }),
    whenUserClickBackButton: async () => {
      await userEvent.click(screen.getByRole('button', { name: /Back/i }));
    },
    thenDetailsAreVisible: async () => {
      expect(await screen.findByText('Superhero Yoda')).toBeVisible();
    },
    thenRouteIsChanged: async () => {
      expect(onClickLink).toHaveBeenCalledWith(ROUTES.superheroes);
    },
  };
};
