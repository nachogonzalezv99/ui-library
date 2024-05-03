import { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";

import * as RadixDialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";
import IconButton from "../IconButton/IconButton";

function Dialog(props: RadixDialog.DialogProps) {
  return <RadixDialog.Root {...props} />;
}

Dialog.Trigger = function DialogTrigger(props: RadixDialog.DialogTriggerProps) {
  return <RadixDialog.Trigger asChild {...props} />;
};

Dialog.Content = function DialogContent({
  className,
  children,
  ...props
}: RadixDialog.DialogContentProps) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className="bg-black fixed inset-0 bg-opacity-20 z-50" />
      <RadixDialog.Content
        {...props}
        className={twMerge(
          "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md max-h-[80vh] min-h-[15rem] max-w-[50rem] min-w-[20rem] z-50 flex flex-col",
          className
        )}
      >
        {children}
        <RadixDialog.Close asChild>
          <IconButton sz="sm" className="absolute top-2 right-2">
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
    <div className={twMerge("h-full overflow-y-auto p-4", className)}>
      {children}
    </div>
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

Dialog.Title = function DialogTitle({
  className,
  ...props
}: RadixDialog.DialogTitleProps) {
  return (
    <RadixDialog.Title
      {...props}
      className={twMerge("text-xl font-medium", className)}
    />
  );
};

Dialog.Description = function DialogDescription({
  className,
  ...props
}: RadixDialog.DialogDescriptionProps) {
  return (
    <RadixDialog.Description {...props} className={twMerge("text-gray-500 mt-3", className)} />
  );
};

Dialog.Close = function DialogClose(props: RadixDialog.DialogCloseProps) {
  return <RadixDialog.Close asChild {...props}/>
};

export default Dialog;
