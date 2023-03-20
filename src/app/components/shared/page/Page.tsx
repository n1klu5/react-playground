import { FullHeightSpinner } from '@app/components/shared/spinner/FullHeightSpinner';
import { ReactNode, Suspense } from 'react';

interface Props {
  /** Component that conetins final logic of specific route */
  children: ReactNode;
}

/**
 * Page component - wrapper for routes that handles common logic needed for each route
 *
 * Example:
 * ```js
 * <Page><Superheroes /></Page>
 * ```
 */
export const Page = ({ children }: Props) => {
  return (
    <Suspense fallback={<FullHeightSpinner />}>
      <>{children}</>
    </Suspense>
  );
};
