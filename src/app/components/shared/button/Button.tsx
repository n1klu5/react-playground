import { ClassValue, clsx } from 'clsx';

interface Props {
  /** Text */
  children?: React.ReactNode;

  /** Additional class names */
  className?: string | ClassValue;
}
/**
 * Button component
 *
 * Example:
 * ```js
 * <Button className="text-black" loading disabled>Click Me</Typography>
 * ```
 */
export const Button = ({ children, className }: Props) => {
  return (
    <button
      className={clsx(
        'rounded bg-pink-700 p-2 text-white hover:ring-2 hover:ring-pink-500 active:bg-pink-300',
        className
      )}
    >
      {children}
    </button>
  );
};
