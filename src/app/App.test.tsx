import { App } from '@app/App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';
import { AllProvidersWrapper } from 'src/tests/AllProvidersWrapper';
import { superheroHandler } from 'src/tests/serverMocks/heroes';
import { setupMockServer } from 'src/tests/setupMockServer';

setupMockServer(superheroHandler());

const onClickLink = vi.fn();
vi.mock('react-router-dom', async () => {
  const mod: object = await vi.importActual('react-router-dom');
  return {
    ...mod,
    Link: ({ to, children }: { to: string; children: ReactNode }) => (
      <div onClick={() => onClickLink(to)}>{children}</div>
    ),
  };
});

describe('<App />', () => {
  let fixtures: ReturnType<typeof getFixtures>;

  beforeEach(() => {
    fixtures = getFixtures();
  });

  it('allows to navigate to main superheroes page when user entered unknown route', async () => {
    fixtures.givenComponentIsRendered();
    fixtures.thenNotFoundPageIsLoaded();
    await fixtures.whenUserClickGoHome();
    fixtures.thenNavigatedToSuperheroesPage();
  });
});

const getFixtures = () => {
  const testingUser = userEvent.setup();

  return {
    givenComponentIsRendered: () => {
      render(<App />, {
        wrapper: ({ children }) => (
          <AllProvidersWrapper initialRouterEntries={['/dashboard']}>{children}</AllProvidersWrapper>
        ),
      });
    },
    whenUserClickGoHome: async () => {
      const goHomeButton = await screen.findByRole('button', { name: /GO HOME/ });
      await testingUser.click(goHomeButton);
    },
    thenNotFoundPageIsLoaded: async () => {
      expect(await screen.findByRole('heading', { name: /Not found/ })).toBeVisible();
    },
    thenNavigatedToSuperheroesPage: async () => {
      expect(onClickLink).toHaveBeenCalledWith('/superheroes');
    },
  };
};
