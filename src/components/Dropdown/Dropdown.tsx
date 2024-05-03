import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function Dropdown(props: RadixDropdownMenu.DropdownMenuProps) {
  return <RadixDropdownMenu.Root {...props} />;
}

Dropdown.Trigger = function DropdownTrigger({
  disabled = false,
  children,
  ...props
}: RadixDropdownMenu.DropdownMenuTriggerProps) {
  return (
    <RadixDropdownMenu.Trigger asChild disabled={disabled} {...props}>
      {children}
    </RadixDropdownMenu.Trigger>
  );
};

Dropdown.Menu = function DropdonwMenu({
  children,
  className,
  ...props
}: RadixDropdownMenu.DropdownMenuContentProps) {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        className={twMerge(
          "bg-white p-1 border border-gray-300 rounded-md shadow-md z-20 min-w-[10rem]",
          className
        )}
        sideOffset={4}
        align="end"
        {...props}
      >
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  );
};

interface DropdownItemProps {
  children?: ReactNode;
}
Dropdown.Item = function DropdownItem({ children }: DropdownItemProps) {
  return (
    <RadixDropdownMenu.Item
      asChild
      className="flex gap-2 items-center w-full text-gray-500 p-3 outline-none not:focus:hover:bg-gray-100 not:focus:hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 cursor-pointer rounded-[3px]"
    >
      {children}
    </RadixDropdownMenu.Item>
  );
};

Dropdown.Separator = function DropdownSeparator() {
  return <RadixDropdownMenu.Separator className="border my-1" />;
};

export default Dropdown;
