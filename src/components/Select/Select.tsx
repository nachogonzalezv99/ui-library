import * as RadixSelect from "@radix-ui/react-select";
import React, { ReactNode } from "react";
import { AiOutlineCheck, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

interface SelectProps {
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
  collapse?: boolean;
}

function Select({
  placeholder,
  value,
  onValueChange,
  collapse,
  children,
}: SelectProps) {
  return (
    <RadixSelect.Root value={value} onValueChange={onValueChange}>
      <RadixSelect.Trigger
        className={twMerge(
          "w-full flex gap-2 items-center justify-between border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-300",
          collapse && "rounded-none border-none"
        )}
        aria-label="Food"
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon className="text-gray-500">
          <AiOutlineDown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="bg-white rounded-md shadow-lg border border-gray-300">
          <RadixSelect.ScrollUpButton className="flex items-center justify-center text-gray-400 h-6 ">
            <AiOutlineUp />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="p-1">
            {children}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex items-center justify-center text-gray-400 h-6">
            <AiOutlineDown />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

interface SelectItemProps extends RadixSelect.SelectItemProps {
  children?: ReactNode;
  className?: string;
  value: string;
}
const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, value, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        className={twMerge(
          " text-gray-500 rounded-[3px] flex items-center pl-7 py-1 relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-800",
          className
        )}
        {...props}
        ref={forwardedRef}
        value={value}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <AiOutlineCheck />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    );
  }
);
Select.Item = SelectItem;

interface SelectGroupProps {
  children: ReactNode;
  label?: string;
}
Select.Group = function SelectGroup({ label, children }: SelectGroupProps) {
  return (
    <RadixSelect.Group>
      <RadixSelect.Label className="pl-7 text-gray-900 font-medium mb-1">
        {label}
      </RadixSelect.Label>
      {children}
    </RadixSelect.Group>
  );
};

Select.Separator = function SelectGroup() {
  return <RadixSelect.Separator className="border my-2" />;
};

export default Select;
