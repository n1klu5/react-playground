import { ClassValue, clsx } from 'clsx';

interface Props {
  /** Additional class names */
  className?: string | ClassValue;

  /** Handler for button click event */
  onClick?: VoidFunction;

  /** Is button diabled? */
  disabled?: boolean;

  /** Text or other children which will be displayed as content of button*/
  children?: React.ReactNode;
}

/**
 * Button component
 *
 * Example:
 * ```js
 * <Button className="text-black" loading disabled>Click Me</Typography>
 * ```
 */
export const Button = ({ className, disabled, onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'cursor-pointer rounded bg-pink-700 p-2 text-white',
        'hover:ring-2 hover:ring-pink-500 active:bg-pink-300',
        'disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-2 disabled:ring-pink-300',
        className
      )}
    >
      {children}
    </button>
  );
};
