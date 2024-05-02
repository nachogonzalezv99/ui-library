import { ComponentProps } from "react";
import { Label } from "./Label/Label";

export interface AreaField extends ComponentProps<"textarea"> {
  id?: string;
  label?: string;
}

export function AreaField({ label }: AreaField) {
  return (
    <div className="flex flex-col gap-1">
      <Label value={label} required={false}/>
      <textarea className="border"/>
    </div>
  );
}
