// import * as React from "react";
// import { cva, VariantProps } from "class-variance-authority";
// import { twMerge } from "tailwind-merge";

// const textStyles = cva([], {
//   variants: {
//     size: {},
//     weight: {
//       normal: "font-normal",
//       bold: "font-bold",
//     },
//     preset: {
//       1: "text-preset-1",
//       2: "text-preset-2",
//       3: "text-preset-3",
//       4: "text-preset-4",
//       5: "text-preset-5",
//     },
//   },
//   defaultVariants: {},
// });

// // eslint-disable-next-line @typescript-eslint/no-empty-object-type
// interface TextProps extends VariantProps<typeof textStyles> {}

// const Text: React.FC<TextProps> = ({ className, ...props }) => {
//   return twMerge(textStyles({ className, ...props }));
// };

// export { Text, textStyles };
