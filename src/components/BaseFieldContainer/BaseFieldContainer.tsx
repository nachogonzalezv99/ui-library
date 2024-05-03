import { ReactNode } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { twMerge } from "tailwind-merge";
import Button, { ButtonContent } from "../Button/Button";
import {
  ComponentSizesType,
  componentSizes,
  innerComponentSize,
} from "../shared";
import { Select, SelectItem } from "../Select/Select";

interface BaseFieldProps {
  sz?: ComponentSizesType;
  children: ReactNode;
}

export function BaseField({ sz = "md", children }: BaseFieldProps) {
  return (
    <div
      className={twMerge(
        "flex w-full border border-gray-300 rounded-md bg-white divide-x overflow-hidden",
        componentSizes[sz]
      )}
    >
      {children}
    </div>
  );
}

interface BaseFieldInputProps {
  id: string;
  sz?: ComponentSizesType;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

export function BaseFieldInput({
  id,
  startAdornment,
  endAdornment,
  sz = "md",
}: BaseFieldInputProps) {
  return (
    <label
      htmlFor={id}
      className={twMerge(
        "flex-1 flex items-center h-full ring-inset focus-within:ring-2 focus-within:ring-blue-300 cursor-text first:rounded-l-[5px] last:rounded-r-[5px]",
        innerComponentSize[sz]
      )}
    >
      {startAdornment && (
        <span className="select-none text-gray-400">{startAdornment}</span>
      )}

      <input id={id} className="w-full h-full outline-none bg-transparent" />

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
      <BaseField>
        <BaseFieldInput id="users" />
      </BaseField>

      <BaseField>
        <BaseFieldInput id="users" endAdornment="kg" />
      </BaseField>

      <BaseField>
        <BaseFieldSection>https://</BaseFieldSection>
        <BaseFieldInput id="users" />
        <BaseFieldSection>.com</BaseFieldSection>
      </BaseField>

      <BaseField>
        <BaseFieldInput id="users" />
        <ButtonContent>Copy</ButtonContent>
      </BaseField>

      <BaseField>
        <BaseFieldInput id="users" startAdornment={<AiOutlineMail />} />
        <ButtonContent variant="contained">Send email</ButtonContent>
      </BaseField>

      <BaseField>
        <BaseFieldInput id="users" />
        <Select defaultValue="usd">
          <SelectItem value="usd">USD</SelectItem>
          <SelectItem value="eur">EUR</SelectItem>
        </Select>
      </BaseField>

      <Select defaultValue="usd">
        <SelectItem value="usd">USD</SelectItem>
        <SelectItem value="eur">EUR</SelectItem>
      </Select>

      <Button>Hola</Button>
      <Button variant="contained">Hola</Button>
      <Button variant="text">Hola</Button>
    </div>
  );
}
