import { BaseField } from "../core/BaseField/BaseField";

export default function TextField({
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
  return (
    <BaseField
      label={label}
      id={id}
      sz={sz}
      required={required}
      error={error}
      readOnly={readOnly}
      disabled={disabled}
      defaultValue={defaultValue}
      min={min}
      max={max}
    >
      <BaseField.Content>
        <BaseField.Input
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          {...props}
        />
      </BaseField.Content>
    </BaseField>
  );
}
