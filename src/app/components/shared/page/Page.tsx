import { Spinner } from '@app/components/shared/spinner/Spinner';
import { ReactNode, Suspense } from 'react';

interface Props {
  children: ReactNode;
}

export const Page = ({ children }: Props) => {
  return (
    <Suspense fallback={<Spinner />}>
      <>{children}</>
    </Suspense>
  );
};
