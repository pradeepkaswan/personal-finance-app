import * as React from "react";
import { cva } from "class-variance-authority";

const inputStyles = cva(
  "w-full block rounded-lg py-3 px-5 border-[1.25px] outline-none border-beige-500 placeholder:text-preset-4 placeholder:text-beige-500 hover:border-grey-500 active:border-grey-900 focus:border-grey-900",
  {
    variants: {},
    defaultVariants: {},
  }
);

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={inputStyles({ className })}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Input, inputStyles };
