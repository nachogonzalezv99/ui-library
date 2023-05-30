import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Spinner from "./Spinner";

const meta = {
  title: "Spinner",
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: { size: "sm" },
};

export const Medium: Story = {
  args: { size: "md" },
};

export const Large: Story = {
  args: { size: "lg" },
};
