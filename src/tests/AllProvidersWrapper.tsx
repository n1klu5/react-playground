import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export const AllProvidersWrapper = ({
  initialRouterEntries,
  children,
}: {
  initialRouterEntries?: string[];
  children: ReactNode;
}) => {
  return <MemoryRouter initialEntries={initialRouterEntries}>{children}</MemoryRouter>;
};
