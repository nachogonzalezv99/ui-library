import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import IconButton from "./IconButton";
import { AiOutlineDelete } from "react-icons/ai";

const meta = {
  title: "IconButton",
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <AiOutlineDelete />,
  },
};

export const Small: Story = {
  args: {
    children: <AiOutlineDelete />,
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: <AiOutlineDelete />,
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: <AiOutlineDelete />,
    size: "lg",
  },
};

export const Tooltip: Story = {
  args: {
    children: <AiOutlineDelete />,
    tooltip: "With tooltip",
  },
};

export const Disabled: Story = {
  args: {
    children: <AiOutlineDelete />,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: <AiOutlineDelete />,
    isLoading: true,
  },
};
