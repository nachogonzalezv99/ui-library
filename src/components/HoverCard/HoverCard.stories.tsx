import type { Meta, StoryObj } from "@storybook/react";
import { AiOutlineEuroCircle } from "react-icons/ai";
import Badge from "../Badge/Badge";
import HoverCard from "./HoverCard";

const meta = {
  title: "HoverCard",
  component: HoverCard,
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <HoverCard.Trigger>
          <Badge sz="sm">
            <AiOutlineEuroCircle />
            euros
          </Badge>
        </HoverCard.Trigger>
        <HoverCard.Content>Content</HoverCard.Content>
      </>
    ),
  },
};
