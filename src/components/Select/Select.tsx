import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectItemProps, SelectProps } from "@radix-ui/react-select";
import React, { ReactNode, useState } from "react";
import { AiOutlineCheck, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { twMerge } from "tailwind-merge";
import {
  ComponentSizesType,
  componentSizes,
  innerComponentSize,
} from "../shared";
import { BaseField } from "../BaseFieldContainer/BaseFieldContainer";

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

interface SelectContentProps {
  sz?: ComponentSizesType;
  children: ReactNode;
}
export function SelectContent({ sz = "md", children }: SelectContentProps) {
  return (
    <SelectPrimitive.Trigger className="outline-none">
      <BaseField>
        <span
          className={twMerge(
            "flex justify-between items-center w-full",
            innerComponentSize[sz]
          )}
        >
          <SelectPrimitive.Value />

          <SelectPrimitive.Icon>
            <AiOutlineDown className={twMerge("h-4 w-4 text-gray-400")} />
          </SelectPrimitive.Icon>
        </span>
      </BaseField>
    </SelectPrimitive.Trigger>
  );
}

export const Select = React.forwardRef<HTMLButtonElement, CustomSelectProps>(
  (
    {
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
    },
    forwardedRef
  ) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
      <div className="flex flex-col flex-1 w-full">
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
          <SelectPrimitive.Trigger
            ref={forwardedRef}
            value={value}
            id={id}
            className="outline-none"
          >
            <BaseField>
              <span
                className={twMerge(
                  "flex justify-between items-center w-full",
                  innerComponentSize[sz]
                )}
              >
                <SelectPrimitive.Value placeholder={placeholder} />
                {!readOnly && (
                  <SelectPrimitive.Icon>
                    <AiOutlineDown
                      className={twMerge(
                        "h-4 w-4 text-gray-400",
                        disabled && "text-gray-300"
                      )}
                    />
                  </SelectPrimitive.Icon>
                )}
              </span>
            </BaseField>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content className="bg-white rounded-md shadow-lg border border-gray-300 z-50">
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
        </SelectPrimitive.Root>

        {Boolean(error) && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

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
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <AiOutlineCheck />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    );
  }
);
