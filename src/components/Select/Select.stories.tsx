import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import React from "react";

const meta = {
  title: "Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Select a role",
    children: (
      <>
        <Select.Item value="user">User</Select.Item>
        <Select.Item value="manager">Manager</Select.Item>
        <Select.Item value="admin">Admin</Select.Item>
      </>
    ),
  },
};

export const Groups: Story = {
  args: {
    placeholder: "Select a project",
    children: (
      <>
        <Select.Group label="Finances">
          <Select.Item value="finance1">Finance project 1</Select.Item>
          <Select.Item value="finance2">Finance project 2</Select.Item>
          <Select.Item value="finance3">Finance project 3</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group label="Administration">
          <Select.Item value="administration1">
            Administration project 1
          </Select.Item>
          <Select.Item value="administration2">
            Administration project 2
          </Select.Item>
          <Select.Item value="administration3">
            Administration project 3
          </Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group label="Human resources">
          <Select.Item value="human1">Human resources project 1</Select.Item>
          <Select.Item value="human2">Human resources project 2</Select.Item>
          <Select.Item value="human3">Human resources project 3</Select.Item>
        </Select.Group>
      </>
    ),
  },
};

export const Collapse: Story = {
  args: {
    placeholder: "Select a role",
    collapse: true,
    children: (
      <>
        <Select.Item value="user">User</Select.Item>
        <Select.Item value="manager">Manager</Select.Item>
        <Select.Item value="admin">Admin</Select.Item>
      </>
    ),
  },
};
