import type { Meta, StoryObj } from "@storybook/react";
import {
    AiOutlineClose,
    AiOutlinePayCircle
} from "react-icons/ai";
import Badge from "./Badge";

const meta = {
  title: "Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Content",
  },
};

export const Contained: Story = {
    args: {
      sz: "sm",
      variant: "contained",
      children: (
        <>
          <AiOutlinePayCircle /> Bitcoin
        </>
      ),
    },
  };

export const WithIcons: Story = {
  args: {
    sz: "sm",
    children: (
      <>
        <AiOutlinePayCircle /> Bitcoin{" "}
        <button className="text-gray-500">
          <AiOutlineClose className="text-xs"/>
        </button>
      </>
    ),
  },
};

  