import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "./IconButton";

const meta = {
  title: "IconButton",
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
      children: "B",
      variant: "text",
    },
  };
  
  export const Contained: Story = {
    args: {
      children: "B",
      variant: "contained",
    },
  };
  
  export const Outlined: Story = {
    args: {
      children: "B",
    },
  };
  
  export const Small: Story = {
    args: {
      children: "B",
      variant: "contained",
      sz: "sm",
    },
  };
  
  export const Medium: Story = {
    args: {
      children: "B",
      variant: "contained",
      sz: "md",
    },
  };
  
  export const Large: Story = {
    args: {
      children: "B",
      variant: "contained",
      sz: "lg",
    },
  };

  export const Tooltip: Story = {
    args: {
      children: "B",
      variant: "contained",
      sz: "lg",
      tooltip: "Some text"
    },
  };