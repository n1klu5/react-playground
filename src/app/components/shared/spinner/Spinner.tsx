import { clsx } from 'clsx';
import { Icon } from '../icon/Icon';

type SpinnerSize = 'sm' | 'md' | 'lg';

const SpinnerSizeMap: Record<SpinnerSize, `h-${string} w-${string}`> = {
  sm: 'h-8 w-8',
  md: 'h-16 w-16',
  lg: 'h-24 w-24',
};

export interface Props {
  /** Size of spinner */
  size?: SpinnerSize;
}

/**
 * Spinner component
 *
 * Example:
 * ```js
 * <Spinner />
 * ```
 */
export const Spinner = ({ size = 'md' }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Icon icon="Spinner" className={clsx('animate-spin text-pink-700', SpinnerSizeMap[size])} />
    </div>
  );
};
