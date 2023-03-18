import { FullHeightSpinner } from '@app/components/shared/spinner/FullHeightSpinner';
import { ReactNode, Suspense } from 'react';

interface Props {
  children: ReactNode;
}

export const Page = ({ children }: Props) => {
  return (
    <Suspense fallback={<FullHeightSpinner />}>
      <>{children}</>
    </Suspense>
  );
};
