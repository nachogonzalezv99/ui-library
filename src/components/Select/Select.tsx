import * as RadixSelect from "@radix-ui/react-select";
import React, { ReactNode } from "react";
import { AiOutlineCheck, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

interface SelectProps {
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
  collapse?: boolean;
  disabled?: boolean;
  defaultValue?: string;
}

function Select({
  id,
  name,
  placeholder,
  value,
  onValueChange,
  defaultValue,
  collapse,
  disabled,
  children,
}: SelectProps) {
  return (
    <RadixSelect.Root
      disabled={disabled}
      value={value}
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      name={name}
    >
      <RadixSelect.Trigger
        id={id}
        className={twMerge(
          "w-full flex gap-2 items-center justify-between border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 text-red-200",
          collapse && "rounded-none border-none",
          disabled ? "text-gray-300" : (placeholder && value === undefined) ? "text-gray-500 ": "text-gray-900"
        )}
        aria-label="Food"
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <AiOutlineDown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="bg-white rounded-md shadow-lg border border-gray-300 z-50">
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

interface SelectItemProps {
  children?: ReactNode;
  className?: string;
  value: string | number;
}
const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, value, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        className={twMerge(
          " text-gray-500 rounded-[3px] flex items-center pl-7 py-1 relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-800",
          className
        )}
        value={String(value)}
        {...props}
        ref={forwardedRef}
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
