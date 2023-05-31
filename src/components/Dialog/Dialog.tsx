import React, { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
import IconButton from "../IconButton";
import * as RadixDialog from "@radix-ui/react-dialog";

interface DialogProps {
  children: ReactNode;
}
function Dialog({ children }: DialogProps) {
  return <RadixDialog.Root>{children}</RadixDialog.Root>;
}

interface DialogTriggerProps {
  children: ReactNode;
  disabled?: boolean;
}
Dialog.Trigger = function DialogTrigger({
  disabled = false,
  children,
}: DialogTriggerProps) {
  return (
    <RadixDialog.Trigger asChild disabled={disabled}
      >
      {children}
    </RadixDialog.Trigger>
  );
};

interface DialogContentProps {
  children: ReactNode;
}
Dialog.Content = function DialogContent({ children }: DialogContentProps) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="bg-black fixed inset-0 bg-opacity-20" />
      <RadixDialog.Content className="fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-md drop-shadow-md max-w-[30rem] min-w-[20rem]">
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
    <RadixDialog.Description className="text-gray-500 mb-8">
      {children}
    </RadixDialog.Description>
  );
};

export default Dialog;
