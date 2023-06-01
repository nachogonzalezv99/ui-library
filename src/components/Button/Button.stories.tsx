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

export const Destructive: Story = {
  args: {
    children: "Button",
    variant: "destructive",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    variant: "contained",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    variant: "contained",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    variant: "contained",
    size: "lg",
  },
};

export const Loading: Story = {
  args: {
    children: "Button",
    variant: "contained",
    isLoading: true
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    variant: "contained",
    disabled: true
  },
};
