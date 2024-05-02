import { ComponentProps } from "react";
import { Label } from "./Label/Label";

export interface AreaField extends ComponentProps<"textarea"> {
  id?: string;
  label?: string;
  error?: string;
}

export function AreaField({ id, label, required, error, ...props }: AreaField) {
  return (
    <div className="w-full flex flex-col gap-1">
      <Label htmlFor={id} value={label} required={required} />

      <textarea className="border" id={id} required={required} {...props} />

      {Boolean(error) && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
