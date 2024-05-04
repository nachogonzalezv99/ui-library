import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import {
  ComponentSizesType,
  componentSizes,
  innerComponentSize,
} from "../shared";

type BadgeVariants = "outlined" | "contained";

interface BadgeProps extends ComponentProps<"div"> {
  sz?: ComponentSizesType;
  variant?: BadgeVariants;
}

const badgeVariants: Record<BadgeVariants, string> = {
  outlined: "border bg-white text-gray-900",
  contained: "bg-blue-700 text-white",
};
export default function Badge({
  sz = "md",
  variant = "outlined",
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      {...props}
      className={twMerge(
        "rounded-full py-1 px-2 inline-flex items-center",
        componentSizes[sz],
        innerComponentSize[sz],
        badgeVariants[variant],
        className
      )}
    />
  );
}
