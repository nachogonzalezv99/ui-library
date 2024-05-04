import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { BsCheck } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

export default function Checkbox({
  id,
  name,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  children,
  className,
  ...props
}: RadixCheckbox.CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <RadixCheckbox.Root
        disabled={disabled}
        name={name}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        checked={checked}
        className={twMerge(
          "shrink-0 flex justify-center items-center bg-white data-[state=unchecked]:hover:bg-gray-50 h-6 w-6 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 outline-none focus:ring-offset-2 data-[state=checked]:bg-blue-700 peer",
          className
        )}
        id={id}
        {...props}
      >
        <RadixCheckbox.Indicator>
          <BsCheck className="text-white text-lg font-semibold " />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label htmlFor={id} className="peer-disabled:text-gray-300">
        {children}
      </label>
    </div>
  );
}
