import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Popover from "./Popover";
import { AiOutlineDelete } from "react-icons/ai";
import IconButton from "../IconButton/IconButton";

const meta = {
  title: "Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Popover.Trigger>
          <IconButton>
            <AiOutlineDelete />
          </IconButton>
        </Popover.Trigger>
        <Popover.Content>
          <div>Hey</div>
        </Popover.Content>
      </>
    ),
  },
};
