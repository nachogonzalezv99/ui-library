import React, { ReactElement, cloneElement, useRef, useState } from "react";
import IconButton from "../IconButton";
import { AiOutlineCheck, AiOutlineCopy } from "react-icons/ai";

interface CopyTextProps {
  children: ReactElement;
}

export function CopyText({ children }: CopyTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [isClickedAnimation, setisClickAnimation] = useState(false);
  return (
    <div className="flex gap-1 items-center group">
      {cloneElement(children, { ref })}
      <IconButton
        size="sm"
        className="invisible group-hover:visible text-slate-400"
        onClick={() => {
          const text = ref.current?.textContent || "";
          navigator.clipboard.writeText(text);
          setisClickAnimation(true);
        }}
        onMouseLeave={() => setisClickAnimation(false)}
      >
        {isClickedAnimation ? <AiOutlineCheck /> : <AiOutlineCopy />}
      </IconButton>
    </div>
  );
}

export default CopyText;
