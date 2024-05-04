import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectItemProps, SelectProps } from "@radix-ui/react-select";
import React, { ReactElement, ReactNode, useState } from "react";
import { AiOutlineCheck, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { twMerge } from "tailwind-merge";
import {
  BaseField,
  BaseFieldProps,
} from "../BaseFieldContainer/BaseFieldContainer";
import { ComponentSizesType, innerComponentSize } from "../shared";

export interface CustomSelectProps extends SelectProps {
  placeholder?: string;
  label?: string;
  id?: string;
  error?: string;
  defaultValue?: string;
  children: ReactNode;
  name?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  sz?: ComponentSizesType;
  collapsed?: boolean;
  isLoading?: boolean;
  onChange?: (a: any) => void;
}

export function BaseSelect({
  children,
  label,
  id,
  placeholder,
  value,
  disabled,
  readOnly,
  error,
  name,
  sz = "md",
  defaultValue,
  onChange,
  className,
  isLoading = false,
  collapsed,
  ...props
}: CustomSelectProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <SelectPrimitive.Root
      disabled={disabled || readOnly}
      name={name}
      defaultValue={defaultValue}
      value={value}
      {...props}
      onValueChange={(value) => {
        setSelectedOption(value);
        if (onChange) onChange({ target: { name, value } });
      }}
    >
      {children}
    </SelectPrimitive.Root>
  );
}

interface SelectTriggerProps extends SelectPrimitive.SelectTriggerProps {
  sz?: ComponentSizesType;
  fullWidth?: boolean;
}
export function SelectTrigger({
  className,
  sz = "md",
  fullWidth=false,
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      {...props}
      className={twMerge(
        "outline-none ring-inset focus:ring-2 focus:ring-blue-300 first:rounded-l-[5px] last:rounded-r-[5px]",
        fullWidth && "w-full",
        className
      )}
    >
      <span
        className={twMerge(
          "flex justify-between items-center w-full h-full",
          innerComponentSize[sz]
        )}
      >
        <SelectPrimitive.Value />

        <SelectPrimitive.Icon>
          <AiOutlineDown className={twMerge("h-4 w-4 text-gray-400")} />
        </SelectPrimitive.Icon>
      </span>
    </SelectPrimitive.Trigger>
  );
}

export function SelectPortal({ children }: { children: ReactNode }) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position="popper"
        sideOffset={5}
        className="bg-white rounded-md shadow-lg border border-gray-300 z-50 w-[var(--radix-select-trigger-width)]"
      >
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-400 h-6 ">
          <AiOutlineUp />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>

        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-400 h-6">
          <AiOutlineDown />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, value, className, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        className={twMerge(
          " text-gray-500 rounded-[3px] flex items-center pl-7 py-1 relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-800",
          className
        )}
        value={String(value)}
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <AiOutlineCheck />
        </SelectPrimitive.ItemIndicator>
        <SelectPrimitive.ItemText>
          <span className="flex items-center gap-1">{children}</span>
        </SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  }
);

export function Select({ sz = "md", id, children, ...props }: BaseFieldProps) {
  return (
    <BaseField id={id} {...props}>
      <BaseSelect>
        <SelectTrigger fullWidth id={id} />
        <SelectPortal>{children}</SelectPortal>
      </BaseSelect>
    </BaseField>
  );
}
