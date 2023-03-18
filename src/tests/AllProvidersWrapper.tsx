import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export const queryClient = new QueryClient({
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
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MemoryRouter>
  );
};
