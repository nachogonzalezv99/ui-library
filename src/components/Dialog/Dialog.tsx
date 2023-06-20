import React, { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
import IconButton from "../IconButton";
import * as RadixDialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

interface DialogProps {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixDialog.Root>
  );
}

interface DialogTriggerProps {
  children: ReactNode;
}
Dialog.Trigger = function DialogTrigger({ children }: DialogTriggerProps) {
  return <RadixDialog.Trigger asChild>{children}</RadixDialog.Trigger>;
};

interface DialogContentProps {
  children: ReactNode;
}
Dialog.Content = function DialogContent({ children }: DialogContentProps) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="bg-black fixed inset-0 bg-opacity-20 z-50" />
      <RadixDialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md max-h-[80vh] min-h-[15rem] max-w-[50rem] min-w-[20rem] z-50 flex flex-col">
        {children}
        <RadixDialog.Close asChild>
          <IconButton size="sm" className="absolute top-2 right-2">
            <AiOutlineClose />
          </IconButton>
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
};

interface DialogHeaderProps {
  children: ReactNode;
  className?: string;
}
Dialog.Header = function DialogHeader({
  children,
  className,
}: DialogHeaderProps) {
  return <div className={twMerge("p-4 border-b", className)}>{children}</div>;
};

interface DialogBodyProps {
  children: ReactNode;
  className?: string;
}
Dialog.Body = function DialogBody({ children, className }: DialogBodyProps) {
  return (
    <div className={twMerge("h-full overflow-y-auto p-4")}>{children}</div>
  );
};

interface DialogFooterProps {
  children: ReactNode;
  className?: string;
}
Dialog.Footer = function DialogFooter({
  children,
  className,
}: DialogFooterProps) {
  return <div className={twMerge("p-4 border-t", className)}>{children}</div>;
};

interface DialogTitleProps {
  children: ReactNode;
}
Dialog.Title = function DialogTitle({ children }: DialogTitleProps) {
  return (
    <RadixDialog.Title className="text-xl font-medium mb-3">
      {children}
    </RadixDialog.Title>
  );
};

interface DialogDescriptionProps {
  children: ReactNode;
}
Dialog.Description = function DialogDescription({
  children,
}: DialogDescriptionProps) {
  return (
    <RadixDialog.Description className="text-gray-500">
      {children}
    </RadixDialog.Description>
  );
};

interface DialogCloseProps {
  children: ReactNode;
}
Dialog.Close = function DialogClose({ children }: DialogCloseProps) {
  return <RadixDialog.Close asChild>{children}</RadixDialog.Close>;
};

export default Dialog;
