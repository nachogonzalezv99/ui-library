import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "./ErrorMessage";

const meta = {
  title: "ErrorMessage",
  component: ErrorMessage,
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCustomButton: Story = {
  args: {
  },
};
