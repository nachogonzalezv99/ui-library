import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { ComponentSizesType, componentSizes } from "../shared";

interface ComponentGroupProps extends ComponentProps<"div"> {
  sz?: ComponentSizesType;
}

export default function ComponentGroup({
  sz = "md",
  className,
  children,
}: ComponentGroupProps) {
  return (
    <div
      className={twMerge(
        "inline-flex border border-gray-300 rounded-md bg-white divide-x overflow-hidden",
        componentSizes[sz],
        className
      )}
    >
      {children}
    </div>
  );
}
