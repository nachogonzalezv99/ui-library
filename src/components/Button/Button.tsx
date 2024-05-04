import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import {
  ComponentSizesType,
  componentSizes,
  innerComponentSize,
} from "../shared";

type ButtonVariants = "outlined" | "contained" | "text";

const buttonVariants: Record<ButtonVariants, string> = {
  outlined: "bg-white border hover:bg-gray-100",
  contained: "bg-blue-700 hover:bg-blue-800 text-white",
  text: "bg-none hover:bg-gray-100",
};

interface ButtonContentProps extends ComponentProps<"button"> {
  sz?: ComponentSizesType;
  variant?: ButtonVariants;
  fullWidth?: boolean;
}
export function ButtonContent({
  sz = "md",
  variant = "text",
  children,
  fullWidth = false,
  className,
  ...props
}: ButtonContentProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center justify-center h-full transition-colors cursor-pointer outline-none ring-inset focus-within:ring-2 focus-within:ring-blue-300 first:rounded-l-[5px] last:rounded-r-[5px]",
        innerComponentSize[sz],
        buttonVariants[variant],
        fullWidth && "w-full",
        className
      )}
    >
      {children}
    </button>
  );
}

interface ButtonProps extends ComponentProps<"button"> {
  sz?: ComponentSizesType;
  variant?: ButtonVariants;
  fullWidth?: boolean;
}
export default function Button({
  sz = "md",
  variant = "outlined",
  children,
  ...props
}: ButtonProps) {
  return (
    <div className={twMerge("rounded-md", componentSizes[sz])}>
      <ButtonContent sz={sz} variant={variant} {...props}>
        {children}
      </ButtonContent>
    </div>
  );
}
