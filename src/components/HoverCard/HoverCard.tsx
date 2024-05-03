import * as RadixHoverCard from "@radix-ui/react-hover-card";
import { twMerge } from "tailwind-merge";

function HoverCard(props: RadixHoverCard.HoverCardProps) {
  return <RadixHoverCard.Root {...props} />;
}

HoverCard.Trigger = function HoverCardTrigger(
  props: RadixHoverCard.HoverCardTriggerProps
) {
  return <RadixHoverCard.Trigger {...props} />;
};

HoverCard.Content = function HoverCardContent({
  children,
  className,
  ...props
}: RadixHoverCard.HoverCardContentProps) {
  return (
    <RadixHoverCard.Portal>
      <RadixHoverCard.Content
        className={twMerge(
          "bg-white border border-gray-300 rounded-md shadow-md z-50 p-4 min-w-[15rem]",
          className
        )}
        sideOffset={4}
        align="end"
        {...props}
      >
        {children}
      </RadixHoverCard.Content>
    </RadixHoverCard.Portal>
  );
};

export default HoverCard