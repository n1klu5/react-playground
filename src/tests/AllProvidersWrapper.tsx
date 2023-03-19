import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export const testsQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export const AllProvidersWrapper = ({
  initialRouterEntries,
  children,
}: {
  initialRouterEntries?: string[];
  children: ReactNode;
}) => {
  return (
    <MemoryRouter initialEntries={initialRouterEntries}>
      <QueryClientProvider client={testsQueryClient}>{children}</QueryClientProvider>
    </MemoryRouter>
  );
};
