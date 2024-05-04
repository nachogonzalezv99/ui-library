import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import {
  ComponentSizesType,
  componentSizes,
  innerComponentSize,
} from "../shared";
import Spinner from "../Spinner";

type ButtonVariants = "outlined" | "contained" | "text";

const buttonVariants: Record<ButtonVariants, string> = {
  outlined: "bg-white border enabled:hover:bg-gray-100 disabled:bg-opacity-20",
  contained: "bg-blue-700 enabled:hover:bg-blue-800 disabled:bg-opacity-0 text-white",
  text: "bg-none enabled:hover:bg-gray-100",
};

interface ButtonContentProps extends ComponentProps<"button"> {
  sz?: ComponentSizesType;
  variant?: ButtonVariants;
  fullWidth?: boolean;
  isLoading?: boolean;
}
export function ButtonContent({
  sz = "md",
  variant = "text",
  children,
  fullWidth = false,
  className,
  disabled,
  isLoading = false,
  ...props
}: ButtonContentProps) {
  return (
    <button
      disabled={disabled || isLoading}
      {...props}
      className={twMerge(
        "relative flex items-center justify-center h-full transition-colors cursor-pointer outline-none ring-inset focus-within:ring-2 focus-within:ring-blue-300 first:rounded-l-[5px] last:rounded-r-[5px] disabled:cursor-default",
        innerComponentSize[sz],
        buttonVariants[variant],
        fullWidth && "w-full",
        className
      )}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
}

interface ButtonProps extends ButtonContentProps {}
export default function Button({ sz = "md", children, ...props }: ButtonProps) {
  return (
    <div className={twMerge("rounded-md", componentSizes[sz])}>
      <ButtonContent sz={sz} {...props}>{children}</ButtonContent>
    </div>
  );
}
