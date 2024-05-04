import { ComponentProps, ReactNode } from "react";
import { AiOutlineCopy, AiOutlineMail } from "react-icons/ai";
import { twMerge } from "tailwind-merge";
import { ButtonContent } from "../Button/Button";
import { IconButtonContent } from "../IconButton/IconButton";
import Label from "../Label/Label";
import {
  BaseSelect,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "../Select/Select";
import {
  ComponentErrorMessage,
  ComponentSizesType,
  componentSizes,
  innerComponentSize,
} from "../shared";
import ComponentGroup from "../ComponentGroup/ComponentGroup";

export interface BaseFieldProps {
  id?: string;
  info?: string;
  label?: string;
  sz?: ComponentSizesType;
  required?: boolean;
  isLoading?: boolean;
  error?: string;
  children: ReactNode;
}

export function BaseField({
  id,
  sz = "md",
  info,
  required,
  label,
  isLoading = false,
  error,
  children,
}: BaseFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <Label value={label} id={id} required={required} info={info} />
      {isLoading ? (
        <div
          className={`bg-gray-200 animate-pulse rounded-md ${componentSizes[sz]}`}
        />
      ) : (
        <ComponentGroup>{children}</ComponentGroup>
      )}
      <ComponentErrorMessage error={error} />
    </div>
  );
}

interface BaseFieldInputProps extends ComponentProps<"input"> {
  sz?: ComponentSizesType;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  error?: string;
}

export function BaseFieldInput({
  id,
  startAdornment,
  endAdornment,
  sz = "md",
  disabled,
  readOnly,
  error,
  ...props
}: BaseFieldInputProps) {
  return (
    <label
      htmlFor={id}
      className={twMerge(
        "flex-1 flex items-center h-full ring-inset focus-within:ring-2 cursor-text first:rounded-l-[5px] last:rounded-r-[5px]",
        innerComponentSize[sz],
        disabled && "bg-gray-100",
        error
          ? "ring-2 ring-red-300 focus-within:ring-red-500"
          : "focus-within:ring-blue-300"
      )}
    >
      {startAdornment && (
        <span className="select-none text-gray-400">{startAdornment}</span>
      )}

      <input
        id={id}
        disabled={disabled}
        readOnly={readOnly}
        className="w-full h-full outline-none bg-transparent"
        {...props}
      />

      {endAdornment && (
        <span className="select-none text-gray-400">{endAdornment}</span>
      )}
    </label>
  );
}

interface BaseFieldSectionProps {
  sz?: ComponentSizesType;
  children: ReactNode;
}
export function BaseFieldSection({
  sz = "md",
  children,
}: BaseFieldSectionProps) {
  return (
    <div
      className={twMerge(
        "flex items-center select-none text-gray-400 h-full ",
        innerComponentSize[sz]
      )}
    >
      {children}
    </div>
  );
}

export default function Input() {
  return (
    <div className="flex flex-col gap-4">
      <BaseField
        required
        label="Weight"
        id="weight"
        info="Selecciona el país o región donde se ha constituido tu empresa. Si eres un particular, selecciona el lugar desde donde realizas tus actividades comerciales."
      >
        <BaseFieldInput id="weight" endAdornment="kg" placeholder="Hola" />
      </BaseField>

      <BaseField id="users" label="Loading" isLoading>
        <BaseFieldInput id="users" type="password" />
      </BaseField>

      <BaseField required label="Disabled" id="weight">
        <BaseFieldInput
          id="weight"
          endAdornment="kg"
          defaultValue="Default value"
          disabled
        />
      </BaseField>

      <BaseField required label="Read only" id="weight">
        <BaseFieldInput
          id="weight"
          endAdornment="kg"
          readOnly
          defaultValue="Default value"
        />
      </BaseField>

      <BaseField required label="Weight" id="weight" error="Required field">
        <BaseFieldInput id="weight" endAdornment="kg" error="Required field" />
      </BaseField>

      <BaseField>
        <BaseFieldInput id="weight" />
        <ButtonContent>+</ButtonContent>
        <ButtonContent>-</ButtonContent>
      </BaseField>

      <BaseField error="Required field">
        <BaseFieldSection>https://</BaseFieldSection>
        <BaseFieldInput id="users" error="Required field" />
        <BaseFieldSection>.com</BaseFieldSection>
      </BaseField>

      <BaseField>
        <BaseFieldInput id="users" />
        <ButtonContent>Copy</ButtonContent>
      </BaseField>

      <BaseField>
        <BaseFieldInput id="users" />
        <IconButtonContent>
          <AiOutlineCopy />
        </IconButtonContent>
      </BaseField>

      <BaseField>
        <BaseFieldInput id="users" startAdornment={<AiOutlineMail />} />
        <ButtonContent variant="contained">Send email</ButtonContent>
      </BaseField>

      <BaseField>
        <BaseFieldInput id="users" />
        <BaseSelect>
          <SelectTrigger />
          <SelectPortal>
            <SelectItem value="usd">USD</SelectItem>
            <SelectItem value="eur">EUR</SelectItem>
          </SelectPortal>
        </BaseSelect>
      </BaseField>
    </div>
  );
}
