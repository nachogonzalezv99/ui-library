import React, { ReactNode } from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import IconButton from "../IconButton";
import { AiOutlineClose } from "react-icons/ai";

interface PopoverProps {
  children: ReactNode;
}

function Popover({ children }: PopoverProps) {
  return <RadixPopover.Root>{children}</RadixPopover.Root>;
}

interface PopoverTriggerProps {
  children: ReactNode;
}
Popover.Trigger = function PopoverTrigger({ children }: PopoverTriggerProps) {
  return <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>;
};

interface PopoverContentProps {
  children: ReactNode;
}
Popover.Content = function PopoverContent({ children }: PopoverContentProps) {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        className="bg-white border border-gray-300 rounded-md shadow-md z-20 p-3 min-w-[15rem]"
        sideOffset={4}
        align="end"
      >
        {children}
        <RadixPopover.Close asChild>
          <IconButton
            size="sm"
            className="absolute top-2 right-2"
            tooltip="Close modal"
          >
            <AiOutlineClose />
          </IconButton>
        </RadixPopover.Close>
      </RadixPopover.Content>
    </RadixPopover.Portal>
  );
};

interface PopoverCloseProps {
  children: ReactNode;
}
Popover.Close = function PopoverClose({ children }: PopoverCloseProps) {
  return <RadixPopover.Close asChild>{children}</RadixPopover.Close>;
};

export default Popover;
