import clsx, { ClassValue } from 'clsx';
import { InputHTMLAttributes } from 'react';

interface Props
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'onChange' | 'min' | 'max' | 'value' | 'id' | 'placeholder'
  > {
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
export const Input = ({ id, type, className, min, max, value, placeholder, onChange }: Props) => {
  return (
    <input
      id={id}
      className={clsx('rounded border border-pink-800 p-2 outline-pink-300', className)}
      type={type}
      min={min}
      max={max}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
