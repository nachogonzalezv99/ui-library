import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  BaseField,
  FieldSizesType,
  fieldSize,
} from "../core/BaseField/BaseField";

export default function NumberField({
  sz = "md",
  startAdornment,
  endAdornment,
  label,
  id,
  defaultValue,
  required,
  error,
  disabled,
  readOnly,
  min,
  max,
  ...props
}: BaseField) {
  const calculateDefaultValue = () => {
    if (defaultValue && max && defaultValue > max) return max;
    if (defaultValue && min && defaultValue < min) return min;
    if (min) return min;
    if (defaultValue) return defaultValue;
    return "";
  };
  const [value, setValue] = useState(calculateDefaultValue);

  const sum = () => setValue((prev) => String(Number(prev) + 1));
  const rest = () => setValue((prev) => String(Number(prev) - 1));

  return (
    <BaseField
      label={label}
      id={id}
      sz={sz}
      required={required}
      error={error}
      readOnly={readOnly}
      disabled={disabled}
      min={min}
      max={max}
    >
      <BaseField.Content>
        <BaseField.Input
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          value={value}
          onChange={(e) =>
            (Number(e.target.value) || e.target.value === "") &&
            setValue(e.target.value)
          }
          {...props}
        />
        <NumberFieldButton
          sz={sz}
          onClick={rest}
          disabled={
            disabled || readOnly || Boolean(min && Number(value) <= Number(min))
          }
        >
          -
        </NumberFieldButton>
        <NumberFieldButton
          sz={sz}
          onClick={sum}
          disabled={
            disabled || readOnly || Boolean(max && Number(value) >= Number(max))
          }
        >
          +
        </NumberFieldButton>
      </BaseField.Content>
    </BaseField>
  );
}

interface INumberFieldButton extends ComponentProps<"button"> {
  sz: FieldSizesType;
}

export function NumberFieldButton({
  className,
  sz,
  disabled,
  ...props
}: INumberFieldButton) {
  return (
    <button
      className={twMerge(
        "shrink-0 aspect-square transition-colors hover:bg-gray-50",
        fieldSize[sz],
        disabled && "bg-gray-50",
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
}
