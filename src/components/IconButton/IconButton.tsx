import React, { ComponentProps, forwardRef } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import Spinner from "../Spinner";
import clsx from "clsx";

const iconButtonVariants = {
  sm: "w-8 h-8 text-md",
  md: "w-10 h-10 text-xl",
  lg: "w-16 h-16 text-4xl",
};

export interface IconButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  tooltip?: string;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, ref) {
    const {
      isLoading,
      disabled,
      children,
      className,
      tooltip,
      size = "md",
      ...other
    } = props;

    const isDisabled = disabled || isLoading;
    return (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              ref={ref}
              className={` focus:ring-2 focus:ring-blue-300  focus:outline-none hover:bg-gray-600 hover:bg-opacity-10 disabled:text-gray-300 
      disabled:bg-opacity-0  rounded-full flex items-center justify-center  text-gray-600 transition-colors ${iconButtonVariants[size]} ${className}`}
              disabled={isDisabled}
              {...other}
            >
              <div className="relative">
                {isLoading && <Spinner />}
                <span
                  className={clsx(
                    isLoading && "invisible",
                    "flex items-center justify-center text-center gap-2"
                  )}
                >
                  {children}
                </span>
              </div>
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            {tooltip && !isDisabled && (
              <Tooltip.Content
                className="rounded-md py-2 px-3 bg-white border shadow-md z-50 text-gray-500 select-none"
                sideOffset={5}
              >
                {tooltip}
                <Tooltip.Arrow className="fill-white drop-shadow-md" />
              </Tooltip.Content>
            )}
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  }
);

export default IconButton;
