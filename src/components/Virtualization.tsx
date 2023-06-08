import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";
import { AiOutlineCheck, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FixedSizeList as List } from "react-window";

export const Virtualization = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <List
          className="List"
          height={150}
          itemCount={1000}
          itemSize={35}
          width={300}
        >
          {DropdownMenuItem}
        </List>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

const DropdownMenuItem = ({ index, style }: { index: number; style: any }) => (
  <DropdownMenu.Item
    className={index % 2 ? "ListItemOdd" : "ListItemEven"}
    style={style}
  >
    Row {index}
  </DropdownMenu.Item>
);
