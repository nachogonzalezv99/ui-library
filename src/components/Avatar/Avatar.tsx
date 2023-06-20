import { ComponentProps, forwardRef } from "react";
import React from "react";
export interface AvatarProps extends ComponentProps<"button"> {
  name: string;
  image?: string;
  disabled?: boolean;
}

const Avatar = forwardRef<HTMLButtonElement, AvatarProps>(function Avatar(
  { name, image, disabled, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className="h-10 aspect-square bg-blue-100 outline-none focus:ring-2 focus:ring-blue-500 rounded-full flex items-center justify-center text-blue-900 font-medium overflow-hidden"
      disabled={disabled}
      {...props}
    >
      {image ? (
        <img
          src="https://yt3.googleusercontent.com/vRF8BHREiJ3Y16AbMxEi_oEuoQlnNNqGpgULuZ6zrWSAi24HcxX3Vko42RN8ToctH-G0qlWd=s900-c-k-c0x00ffffff-no-rj"
          className="w-full h-full object-cover"
        />
      ) : (
        name.split(" ").map((word) => word.charAt(0).toUpperCase())
      )}
    </button>
  );
});

export default Avatar;
