import type { Meta, StoryObj } from "@storybook/react";

import Combobox from "./Combobox";

const meta = {
  title: "Combobox",
  component: Combobox,
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
    },
  };
  