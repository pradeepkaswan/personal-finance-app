import * as React from "react";
import { cva } from "class-variance-authority";

const inputStyles = cva(
  "w-full block rounded-lg border py-3 px-5 outline outline-2 -outline-offset-2 outline-beige-500 hover:outline-grey-500 active:outline-grey-900 focus:outline-grey-900",
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
