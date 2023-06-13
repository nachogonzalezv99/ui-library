import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { BsCheck } from "react-icons/bs";

interface Props {
  id: string;
  name: string;
  checked?: string;
  onCheckedChange?: () => void;
  disabled?: boolean;
  defaultChecked?: boolean;
  label: string;
}

function Checkbox({
  id,
  name,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  label,
  ...props
}: Props) {
  return (
    <div className="flex items-center gap-2">
      <RadixCheckbox.Root
        disabled={disabled}
        name={name}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        className="shrink-0 flex justify-center items-center bg-white hover:bg-gray-50 h-6 w-6 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 outline-none focus:ring-offset-2 data-[state=checked]:bg-blue-700 peer"
        id={id}
        {...props}
      >
        <RadixCheckbox.Indicator>
          <BsCheck className="text-white text-lg font-semibold " />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label htmlFor={id} className="peer-disabled:text-gray-300">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
