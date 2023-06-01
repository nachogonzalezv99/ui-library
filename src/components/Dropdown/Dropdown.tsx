import React, { ReactNode } from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";

interface DropdownProps {
  children?: ReactNode;
}
function Dropdown({ children }: DropdownProps) {
  return <RadixDropdownMenu.Root>{children}</RadixDropdownMenu.Root>;
}

interface DropdownButtonProps {
  disabled?: boolean;
  children?: ReactNode;
}
Dropdown.Trigger = function DropdownTrigger({
  disabled = false,
  children,
}: DropdownButtonProps) {
  return (
    <RadixDropdownMenu.Trigger asChild disabled={disabled}>
      {children}
    </RadixDropdownMenu.Trigger>
  );
};

interface DropdownMenuProps {
  children?: ReactNode;
}
Dropdown.Menu = function DropdonwMenu({ children }: DropdownMenuProps) {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        className="bg-white p-1 border border-gray-300 rounded-md shadow-md z-20 min-w-[10rem]"
        sideOffset={4}
        align="end"
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
      className="text-left w-full text-gray-500 p-3 outline-none not:focus:hover:bg-gray-100 not:focus:hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 cursor-pointer rounded-[3px]"
    >
      {children}
    </RadixDropdownMenu.Item>
  );
};

export default Dropdown;
