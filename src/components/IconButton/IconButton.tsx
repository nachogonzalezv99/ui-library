import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import {
  ComponentSizesType,
  componentSizes,
  innerComponentSize,
} from "../shared";

type IconButtonVariants = "outlined" | "contained" | "text";

const buttonVariants: Record<IconButtonVariants, string> = {
  outlined: "bg-white border hover:bg-gray-100",
  contained: "bg-blue-700 hover:bg-blue-800 text-white",
  text: "bg-none hover:bg-gray-100",
};
interface IconButtonContentProps extends ComponentProps<"button"> {
  variant?: IconButtonVariants;
  children: ReactNode;
}
export function IconButtonContent({
  variant = "text",
  children,
  ...props
}: IconButtonContentProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "h-full aspect-square flex justify-center items-center transition-colors cursor-pointer outline-none ring-inset focus-within:ring-2 focus-within:ring-blue-300 first:rounded-l-[5px] last:rounded-r-[5px]",
        buttonVariants[variant],
      )}
    >
      {children}
    </button>
  );
}

interface IconButtonProps extends ComponentProps<"button"> {
  sz?: ComponentSizesType;
  variant?: IconButtonVariants;
}
export default function IconButton({
  sz = "md",
  variant = "outlined",
  children,
  className,
  ...props
}: IconButtonProps) {
  return (
    <div className={twMerge("rounded-md", componentSizes[sz], className)}>
      <IconButtonContent variant={variant} {...props}>
        {children}
      </IconButtonContent>
    </div>
  );
}
