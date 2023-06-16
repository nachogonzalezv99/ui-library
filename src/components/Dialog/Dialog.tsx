import React, { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
import IconButton from "../IconButton";
import * as RadixDialog from "@radix-ui/react-dialog";

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
      <RadixDialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md max-h-[80vh] max-w-[50rem] min-w-[20rem] z-50 flex flex-col">
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
}
Dialog.Header = function DialogHeader({ children }: DialogHeaderProps) {
  return <div className="p-6 border-b">{children}</div>;
};

interface DialogBodyProps {
  children: ReactNode;
}
Dialog.Body = function DialogBody({ children }: DialogBodyProps) {
  return <div className="h-full overflow-y-auto p-6">{children}</div>;
};

interface DialogFooterProps {
  children: ReactNode;
}
Dialog.Footer = function DialogFooter({ children }: DialogFooterProps) {
  return <div className="p-6 border-t">{children}</div>;
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
