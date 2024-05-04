import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import Button from "../Button/Button";

const meta = {
  title: "Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Card.Body>Content</Card.Body>,
  },
};

export const WithHeaderAndBody: Story = {
  args: {
    children: (
      <>
        <Card.Header><h2 className="font-semibold text-2xl">Header</h2></Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima non
          eos obcaecati consectetur, esse repudiandae aut voluptatibus quisquam
          velit doloribus similique officia atque cum voluptatem. Eligendi et ex
          nesciunt error.
        </Card.Body>
        <Card.Footer><Button>Save</Button></Card.Footer>
      </>
    ),
  },
};
