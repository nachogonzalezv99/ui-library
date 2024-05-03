import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta = {
  title: "Spinner",
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: { sz: "sm" },
};

export const Medium: Story = {
  args: { sz: "md" },
};

export const Large: Story = {
  args: { sz: "lg" },
};
