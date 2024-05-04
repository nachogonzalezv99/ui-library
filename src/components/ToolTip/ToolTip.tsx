import * as RadixTooltip from "@radix-ui/react-tooltip";
import { twMerge } from "tailwind-merge";

export default function ToolTip(props: RadixTooltip.TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root {...props} />
    </RadixTooltip.Provider>
  );
}

ToolTip.Trigger = (props: RadixTooltip.TooltipTriggerProps) => {
  return <RadixTooltip.Trigger asChild {...props} />;
};

ToolTip.Content = ({
  children,
  className,
  ...props
}: RadixTooltip.TooltipContentProps) => {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        className={twMerge(
          "rounded-md py-2 px-3 bg-white border shadow-md z-50 text-gray-500 select-none max-w-60 text-sm",
          className
        )}
        sideOffset={5}
        {...props}
      >
        {children}
        <RadixTooltip.Arrow className="fill-white drop-shadow-md" />
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  );
};
