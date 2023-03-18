import { Spinner } from '@app/components/shared/spinner/Spinner';
import { clsx } from 'clsx';

/**
 * FullPageSpinner component
 *
 * Example:
 * ```js
 * <FullHeightSpinner />
 * ```
 */
export const FullHeightSpinner = () => {
  return (
    <div className={clsx('flex h-[calc(100vh_-_var(--topbar-height))] w-full items-center justify-center')}>
      <Spinner size="lg" />
    </div>
  );
};
