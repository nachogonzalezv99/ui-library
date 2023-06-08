import React, { ReactNode } from "react";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";

interface AlertDialogProps {
  children: ReactNode;
}
function AlertDialog({ children }: AlertDialogProps) {
  return <RadixAlertDialog.Root>{children}</RadixAlertDialog.Root>;
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
      <RadixAlertDialog.Overlay className="bg-black fixed inset-0 bg-opacity-20" />
      <RadixAlertDialog.Content className="fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6  bg-white rounded-md drop-shadow-md max-w-[30rem]">
        {children}
      </RadixAlertDialog.Content>
    </RadixAlertDialog.Portal>
  );
};

AlertDialog.Title = function AlertDialogTitle({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <RadixAlertDialog.Title className="text-xl font-medium mb-3">
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
