import type { Meta, StoryObj } from "@storybook/react";
import UploadFiles from "./UploadFiles";

const meta = {
  title: "UploadFiles",
  component: UploadFiles,
} satisfies Meta<typeof UploadFiles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    files: [],
    setFiles: ()=>{},
    label: "Files",
    id:"file"
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    files: [],
    setFiles: ()=>{}
  },
};

