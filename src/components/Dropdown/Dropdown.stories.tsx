import type { Meta, StoryObj } from "@storybook/react";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import Dropdown from "./Dropdown";

const meta = {
  title: "Dropdown",
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCustomButton: Story = {
  args: {
    children: (
      <>
        <Dropdown.Trigger>
          <button>Click</button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>
            <button>hey</button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button>hey</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </>
    ),
  },
};

export const WithIconButton: Story = {
  args: {
    children: (
      <>
        <Dropdown.Trigger>
          <IconButton>
            <AiOutlineDelete />
          </IconButton>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>
            <button>
              <AiOutlineDelete />
              Delete
            </button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button>hey</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </>
    ),
  },
};

export const WithSeparator: Story = {
  args: {
    children: (
      <>
        <Dropdown.Trigger>
          <IconButton>
            <AiOutlineDelete />
          </IconButton>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <div className="p-2">
            <p>Some text</p>
          </div>
          <Dropdown.Separator />
          <Dropdown.Item>
            <button>
              <AiOutlineDelete />
              Delete
            </button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </>
    ),
  },
};

export const WithDisabledButton: Story = {
  args: {
    children: (
      <>
        <Dropdown.Trigger disabled>
          <Button>
            <AiOutlineDelete />
            Delete
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>
            <button>Delete</button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button>hey</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </>
    ),
  },
};

export const WithLoadingButton: Story = {
  args: {
    children: (
      <>
        <Dropdown.Trigger disabled>
          <Button /* isLoading */ variant="contained">
            <AiOutlineDelete />
            Delete
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>
            <button>Delete</button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button>hey</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </>
    ),
  },
};
