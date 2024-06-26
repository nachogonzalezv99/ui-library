import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import IconButton from "../IconButton/IconButton";
import { AiOutlineInfo, AiOutlineInfoCircle } from "react-icons/ai";
import ToolTip from "../ToolTip/ToolTip";

interface ILabel extends ComponentProps<"label"> {
  required?: boolean;
  info?: string;
  value?: string;
}
export default function Label({
  required = false,
  info,
  value,
  className,
  id,
  ...props
}: ILabel) {
  const [open, setOpen] = useState(false);

  return (
    value && (
      <label
        test-id="label"
        htmlFor={id}
        {...props}
        className={twMerge(
          "text-gray-500 text-sm flex items-center gap-8 justify-between",
          className
        )}
      >
        <span className="flex items-center gap-2">
          {value} {required && <span className="text-red-500">*</span>}
        </span>
        {info && (
          <ToolTip open={open} onOpenChange={setOpen}>
            <ToolTip.Trigger asChild={false} onClick={() => setOpen(true)} type="button">
              <AiOutlineInfoCircle />
            </ToolTip.Trigger>
            <ToolTip.Content>{info}</ToolTip.Content>
          </ToolTip>
        )}
      </label>
    )
  );
}
