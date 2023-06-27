import React, { ReactNode, cloneElement, useId, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { twJoin } from "tailwind-merge";
import IconButton from "../IconButton";
import * as ReactIs from "react-is";

interface TreeViewProps {
  children: ReactNode;
}
const renderTreeItems = (items: any, level: number, id: string) => {
  if (!Array.isArray(items)) items = [items];

  return items.map((item: any, i: number) => {
    if (ReactIs.isFragment(item)) {
      return item.props.children.map((child: any, _i: number) =>
        cloneElement(child, { level, key: `${id}-${_i}` })
      );
    } else {
      return cloneElement(item, { level, key: `${id}-${i}` });
    }
  });
};

function TreeView({ children }: TreeViewProps) {
  return renderTreeItems(children, 0, "0");
}

interface TreeViewItemProps {
  label: string;
  children?: ReactNode;
  level?: number;
  actions?: any;
}
TreeView.Item = function TreeViewItem({
  label,
  level = 0,
  children,
  actions,
}: TreeViewItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const uuid = useId();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor={`${uuid}-toggle`}
          style={{ paddingLeft: `${level + 0.5}rem` }}
          className="flex items-center gap-8 justify-between text-gray-600 hover:bg-gray-100 hover:text-gray-950 rounded-sm p-2 py-1 w-full group cursor-pointer"
        >
          <input type="submit" id={`${uuid}-toggle`} className="hidden" />
          <div className="flex gap-2 items-center">
            <IconButton
              size="sm"
              className={twJoin(
                "text-sm",
                !children && "invisible",
                isOpen && " rotate-90"
              )}
            >
              <AiOutlineRight />
            </IconButton>

            <p> {label}</p>
          </div>
          {actions && (
            <div className="flex opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100">
              {actions.map((action: any, i: number) =>
                cloneElement(action, { key: `${uuid}-${i}` })
              )}
            </div>
          )}
        </label>
      </form>

      {isOpen && children && renderTreeItems(children, level! + 1, uuid)}
    </>
  );
};

export default TreeView;
