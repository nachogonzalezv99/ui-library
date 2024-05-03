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
    placeholder: "Select a role",
    label: "Role",
    id: "uno",
    children: (
      <>
        <SelectItem value="user">User</SelectItem>
        <SelectItem value="manager">Manager</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </>
    ),
  },
};
export const Disabled: Story = {
  args: {
    id: "dos",
    disabled: true,
    placeholder: "Select a role",
    children: (
      <>
        <SelectItem value="user">User</SelectItem>
      </>
    ),
  },
};

export const Error: Story = {
  args: {
    id: "dos",
    placeholder: "Select a role",
    error: "Required",
    children: (
      <>
        <SelectItem value="user">User</SelectItem>
      </>
    ),
  },
};

export const DefaultValue: Story = {
  args: {
    label: "Role",
    defaultValue: "user",
    id: "uno",
    children: (
      <>
        <SelectItem value="user">User</SelectItem>
        <SelectItem value="manager">Manager</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    label: "Role",
    defaultValue: "user",
    id: "uno",
    isLoading: true,
    children: (
      <>
        <SelectItem value="user">User</SelectItem>
        <SelectItem value="manager">Manager</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </>
    ),
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Role",
    defaultValue: "user",
    id: "uno",
    readOnly: true,
    children: (
      <>
        <SelectItem value="user">User</SelectItem>
        <SelectItem value="manager">Manager</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </>
    ),
  },
};
