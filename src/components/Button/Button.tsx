import React, { ComponentProps, ReactNode, forwardRef } from "react";
import Spinner from "../Spinner";
import { twMerge } from "tailwind-merge";

type ButtonVariantsType = "contained" | "text" | "destructive";
type ButtonSizesType = "sm" | "md" | "lg";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariantsType;
  isLoading?: boolean;
  disabled?: boolean;
  size?: ButtonSizesType;
  children: ReactNode;
}
const buttonSize: Record<ButtonSizesType, string> = {
  sm: "px-3 py-2 text-base",
  md: "px-4 py-3 text-base min-h-[3rem]",
  lg: "px-5 py-4 text-xl",
};

const buttonVariants: Record<ButtonVariantsType, string> = {
  contained:
    "bg-blue-700 text-white enabled:hover:bg-blue-800 disabled:bg-opacity-20 ",
  text: "text-gray-700 hover:bg-gray-600 hover:bg-opacity-10 disabled:text-gray-300  disabled:bg-opacity-0",
  destructive:
    "bg-red-600 text-white enabled:hover:bg-red-700 disabled:bg-opacity-20 ",
};
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "text",
    isLoading,
    disabled,
    children,
    size = "md",
    className,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={twMerge(
        "rounded-md transition-colors cursor-pointer focus:ring-2 focus:ring-blue-300 outline-none disabled:cursor-default",
        buttonVariants[variant],
        buttonSize[size],
        className
      )}
      {...props}
    >
      <div className="relative">
        {isLoading && <Spinner />}
        <span
          className={twMerge(
            isLoading && "invisible",
            "flex items-center justify-center text-center gap-2"
          )}
        >
          {children}
        </span>
      </div>
    </button>
  );
});

export default Button;
