import { ReactNode, Suspense } from 'react';

interface Props {
  children: ReactNode;
}

export const Page = ({ children }: Props) => {
  return (
    <Suspense fallback={null}>
      <>{children}</>
    </Suspense>
  );
};
