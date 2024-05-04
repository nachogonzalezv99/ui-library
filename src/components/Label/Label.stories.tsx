import type { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta = {
  title: "Label",
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "I am a label"
  },
};

export const Required: Story = {
    args: {
      value: "I am a label",
      required: true
    },
  };