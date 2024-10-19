import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "flex items-center justify-center focus:outline-none p-4 rounded-lg text-preset-4",
  {
    variants: {
      intent: {
        primary: "bg-grey-900 text-white hover:bg-grey-500",
        secondary:
          "bg-beige-100 text-grey-900 hover:bg-white hover:border hover:border-beige-500",
        tertiary: "",
        danger: "bg-red text-white hover:opacity-20",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
      weight: {
        normal: "font-normal",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      intent: "primary",
      weight: "normal",
      fullWidth: false,
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, fullWidth, weight, ...props }, ref) => {
    return (
      <button
        className={buttonStyles({ className, intent, fullWidth, weight })}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Button, buttonStyles };
