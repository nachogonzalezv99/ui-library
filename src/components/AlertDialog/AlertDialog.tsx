import React, { ReactNode } from "react";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import { twMerge } from "tailwind-merge";

interface AlertDialogProps {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
function AlertDialog({ open, onOpenChange, children }: AlertDialogProps) {
  return (
    <RadixAlertDialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </RadixAlertDialog.Root>
  );
}

interface AlertDialogTrigger {
  children: ReactNode;
  disabled?: boolean;
}
AlertDialog.Trigger = function AlertDialogTrigger({
  children,
  disabled,
}: AlertDialogTrigger) {
  return (
    <RadixAlertDialog.Trigger disabled={disabled} asChild>
      {children}
    </RadixAlertDialog.Trigger>
  );
};

interface AlertDialogContent {
  children: ReactNode;
}
AlertDialog.Content = function AlertDialogContent({
  children,
}: AlertDialogContent) {
  return (
    <RadixAlertDialog.Portal>
      <RadixAlertDialog.Overlay className="bg-black fixed inset-0 bg-opacity-20 z-50" />
      <RadixAlertDialog.Content className="fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md max-h-[95vh] max-w-[50rem] min-w-[20rem] z-50 flex flex-col ">
        {children}
      </RadixAlertDialog.Content>
    </RadixAlertDialog.Portal>
  );
};

interface AlertDialogHeaderProps {
  children: ReactNode;
  className?: string;
}
AlertDialog.Header = function AlertDialogHeader({
  children,
  className,
}: AlertDialogHeaderProps) {
  return <div className={twMerge("p-4 border-b", className)}>{children}</div>;
};

interface AlertDialogBodyProps {
  children: ReactNode;
  className?: string;
}
AlertDialog.Body = function AlertDialogBody({
  children,
  className,
}: AlertDialogBodyProps) {
  return (
    <div className={twMerge("h-full overflow-y-auto p-4", className)}>
      {children}
    </div>
  );
};

interface AlertDialogFooterProps {
  children: ReactNode;
  className?: string;
}
AlertDialog.Footer = function AlertDialogFooter({
  className,
  children,
}: AlertDialogFooterProps) {
  return <div className={twMerge("p-4 border-t", className)}>{children}</div>;
};

AlertDialog.Title = function AlertDialogTitle({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <RadixAlertDialog.Title className="text-xl font-medium">
      {children}
    </RadixAlertDialog.Title>
  );
};

AlertDialog.Description = function AlertDialogDescription({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <RadixAlertDialog.Description className="text-gray-500 mb-3">
      {children}
    </RadixAlertDialog.Description>
  );
};

AlertDialog.Action = function AlertDialogAction({
  children,
}: {
  children: ReactNode;
}) {
  return <RadixAlertDialog.Action asChild>{children}</RadixAlertDialog.Action>;
};

AlertDialog.Cancel = function AlertDialogCancel({
  children,
}: {
  children: ReactNode;
}) {
  return <RadixAlertDialog.Cancel asChild>{children}</RadixAlertDialog.Cancel>;
};

export default AlertDialog;
