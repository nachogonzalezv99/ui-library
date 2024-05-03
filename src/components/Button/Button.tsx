import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ComponentSizesType, componentSizes, innerComponentSize } from "../shared";

type ButtonVariants = "outlined" | "contained" | "text";


const buttonVariants: Record<ButtonVariants, string> = {
  outlined: "bg-white border hover:bg-gray-100",
  contained: "bg-blue-700 hover:bg-blue-800 text-white",
  text: "bg-none hover:bg-gray-100",
};
interface ButtonContentProps {
  sz?: ComponentSizesType;
  variant?: ButtonVariants;
  children: ReactNode;
}
export function ButtonContent({
  sz = "md",
  variant = "text",
  children,
}: ButtonContentProps) {
  return (
    <button
      className={twMerge(
        "h-full transition-colors cursor-pointer outline-none ring-inset focus-within:ring-2 focus-within:ring-blue-300 first:rounded-l-[5px] last:rounded-r-[5px]",
        innerComponentSize[sz],
        buttonVariants[variant]
      )}
    >
      {children}
    </button>
  );
}


interface ButtonProps {
  sz?: ComponentSizesType;
  variant?: ButtonVariants;
  children: ReactNode;
}
export default function Button({
  sz = "md",
  variant = "outlined",
  children,
}: ButtonProps) {
  return (
    <div className={twMerge("inline-flex w-fit rounded-md", componentSizes[sz])}>
      <ButtonContent sz={sz} variant={variant}>
        {children}
      </ButtonContent>
    </div>
  );
}