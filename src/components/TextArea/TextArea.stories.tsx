import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import TextArea from "./TextArea";

const meta = {
  title: "TextArea",
  component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "description",
  },
};
