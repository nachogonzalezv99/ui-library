import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TextField from './TextField';

const meta = {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    sz: "sm",
    placeholder: "Add some number",
  },
};

export const Required: Story = {
  args: {
    id: "users",
    label: "Users",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    id: "users",
    label: "Users",
    disabled: true,
    defaultValue: "10",
  },
};

export const Readonly: Story = {
  args: {
    id: "users",
    label: "Users",
    readOnly: true,
    defaultValue: "10",
  },
};

export const Error: Story = {
  args: {
    id: "users",
    label: "Users",
    error: "Invalid number",
  },
};

export const Adornments: Story = {
  args: {
    id: "users",
    label: "Users",
    startAdornment: "Kg",
    endAdornment: "h",
  },
};

