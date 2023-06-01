import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Badge from "./Badge";

const meta = {
  title: "Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "admin",
  },
};

export const Secondary: Story = {
  args: {
    children: "admin",
    variant: "secondary",
  },
};
export const Small: Story = {
  args: {
    children: "admin",
    variant: "secondary",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "admin",
    variant: "secondary",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "admin",
    variant: "secondary",
    size: "lg",
  },
};
