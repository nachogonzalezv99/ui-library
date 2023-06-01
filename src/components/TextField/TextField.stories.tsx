import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";

const meta = {
  title: "TextField",
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "Hola",
  },
};

export const Placeholder: Story = {
  args: {
    id: "Hola",
    placeholder: "Email",
  },
};

export const Disabled: Story = {
  args: {
    id: "Hola",
    placeholder: "Email",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    id: "Hola",
    error: "Email is required"
  },
};
