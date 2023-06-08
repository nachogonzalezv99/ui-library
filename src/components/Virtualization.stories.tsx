import type { Meta, StoryObj } from "@storybook/react";
import { Virtualization } from "./Virtualization";
import React from "react";

const meta = {
  title: "Virtualization",
  component: Virtualization,
} satisfies Meta<typeof Virtualization>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
