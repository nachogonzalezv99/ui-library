import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children: "Button",
    variant: "text",
  },
};

export const Contained: Story = {
  args: {
    children: "Button",
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    variant: "contained",
    sz: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    variant: "contained",
    sz: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    variant: "contained",
    sz: "lg",
  },
};

