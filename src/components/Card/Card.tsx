import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={twMerge(
        "bg-white flex flex-col divide-y border border-gray-300 rounded-md overflow-hidden",
        className
      )}
    />
  );
}

Card.Header = ({ className, ...props }: ComponentProps<"div">) => {
  return <div {...props} className={twMerge("p-5", className)} />;
};

Card.Body = ({ className, ...props }: ComponentProps<"div">) => {
  return <div {...props} className={twMerge("p-5", className)} />;
};

Card.Footer = ({ className, ...props }: ComponentProps<"div">) => {
  return <div {...props} className={twMerge("px-5 py-3 bg-slate-50", className)} />;
};
