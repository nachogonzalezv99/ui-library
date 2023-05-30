import type { Meta, StoryObj } from "@storybook/react";
import React from "react"
import CopyText from "./CopyText";

const meta = {
  title: "CopyText",
  component: CopyText,
} satisfies Meta<typeof CopyText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children: <div>Copy text</div>,
  },
};