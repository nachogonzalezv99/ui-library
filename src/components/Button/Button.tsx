import clsx from "clsx";
import React, { ComponentProps, ReactNode, forwardRef } from "react";
import Spinner from "../Spinner";

const buttonSize = {
  sm: "px-3 py-2 text-base",
  md: "px-4 py-3 text-base min-h-[3rem]",
  lg: "px-5 py-4 text-xl",
};
export interface ButtonProps extends ComponentProps<"button"> {
  variant?: "contained" | "text";
  isLoading?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}
const buttonVariants = {
  contained:
    "bg-blue-700 text-white enabled:hover:bg-blue-800 disabled:bg-opacity-20 disabled:cursor-default",
  text: "text-gray-700 hover:bg-gray-600 hover:bg-opacity-10 disabled:text-gray-300 disabled:cursor-default disabled:bg-opacity-0",
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
      className={`relative rounded-md transition-colors cursor-pointer ${buttonVariants[variant]} ${buttonSize[size]} ${className}`}
      {...props}
    >
      {isLoading && <Spinner />}
      <span
        className={clsx(
          isLoading && "invisible",
          "flex items-center justify-center text-center gap-2"
        )}
      >
        {children}
      </span>
    </button>
  );
});

export default Button;
