import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Checkbox from "./Checkbox";

const meta = {
  title: "Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { id: "1", label: "hey", name: "hey" },
};

export const Disabled: Story = {
  args: { id: "1", label: "hey", name: "hey", disabled: true },
};
