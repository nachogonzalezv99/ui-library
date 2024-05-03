import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectItem } from "./Select";

const meta = {
  title: "Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <SelectItem value="user">User</SelectItem>
        <SelectItem value="manager">Manager</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </>
    ),
  },
};