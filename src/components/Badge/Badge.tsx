import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BadgeVariantsType = "primary" | "secondary";
type BadgeSizesType = "sm" | "md" | "lg";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariantsType;
  size?: BadgeSizesType;
}

const badgeVariants: Record<BadgeVariantsType, string> = {
  primary: "bg-blue-700 text-white",
  secondary: "bg-gray-100 border border-gray-200",
};
const badgeSizes: Record<BadgeSizesType, string> = {
  sm: "text-xs",
  md: "text-base",
  lg: "text-lg",
};
function Badge({
  children,
  variant = "primary",
  size = "md",
  className,
}: Props) {
  return (
    <div
      className={twMerge(
        "inline-flex justify-center items-center rounded-full px-2 py-1 text-lg",
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}

export default Badge;
