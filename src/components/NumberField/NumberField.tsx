import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FieldBase } from "../FieldBase";

export function NumberField({
  sz = "md",
  startAdornment,
  endAdornment,
  label,
  id,
  defaultValue,
  ...props
}: FieldBase) {
  const [value, setValue] = useState(defaultValue || "");

  const sum = () => setValue((prev) => String(Number(prev) + 1));
  const rest = () => setValue((prev) => String(Number(prev) - 1));

  return (
    <FieldBase label={label} id={id}>
      <FieldBase.Content id={id}>
        <FieldBase.Input
          id={id}
          sz={sz}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          value={value}
          onChange={(e) =>
            (Number(e.target.value) || e.target.value === "") &&
            setValue(e.target.value)
          }
          {...props}
        />
        <NumberFieldButton onClick={rest}>-</NumberFieldButton>
        <NumberFieldButton onClick={sum}>+</NumberFieldButton>
      </FieldBase.Content>
    </FieldBase>
  );
}

interface INumberFieldButton extends ComponentProps<"button"> {}

export function NumberFieldButton({ className, ...props }: INumberFieldButton) {
  return (
    <button
      className={twMerge(
        "shrink-0 aspect-square h-12 transition-colors hover:bg-gray-50",
        className
      )}
      {...props}
    />
  );
}
