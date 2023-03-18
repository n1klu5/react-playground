import { clsx, type ClassValue } from 'clsx';
import { Suspense, useMemo } from 'react';
import { icons } from './icons';

export type IconName = keyof typeof icons;

interface Props {
  /** Icon name defining which icon file will be used */
  icon: IconName;

  /** Additional class names */
  className?: string | ClassValue;
}

/**
 * Icon component
 *
 * Example:
 * ```js
 * <Icon icon="Arrow" className="rotate-180 text-pink" />
 * ```
 */
export const Icon = ({ icon, className }: Props) => {
  const SvgIcon = useMemo(() => icons[icon], [icon]);

  return (
    <div
      className={clsx(className, '[&>svg]:h-full [&>svg]:w-full')}
      aria-label={icon}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Suspense fallback={null}>
        <SvgIcon />
      </Suspense>
    </div>
  );
};
