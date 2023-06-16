import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import IconButton from "../IconButton/IconButton";
import Dialog from "./Dialog";
import Button from "../Button/Button";

const meta = {
  title: "Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCustomButton: Story = {
  args: {
    children: (
      <>
        <Dialog.Trigger>
          <button>Click</button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Description>Description</Dialog.Description>
          <Dialog.Close>
            <Button variant="contained">Save changes</Button>
          </Dialog.Close>
        </Dialog.Content>
      </>
    ),
  },
};

export const WithIconButton: Story = {
  args: {
    children: (
      <>
        <Dialog.Trigger>
          <IconButton>
            <AiOutlineSetting />
          </IconButton>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Description>Description</Dialog.Description>
          <div>
            <ul>
              <li>Other info</li>
            </ul>
          </div>
        </Dialog.Content>
      </>
    ),
  },
};

export const WithDisabledButton: Story = {
  args: {
    children: (
      <>
        <Dialog.Trigger>
          <IconButton disabled>
            <AiOutlineSetting />
          </IconButton>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Description>Description</Dialog.Description>
          <div>
            <ul>
              <li>Other info</li>
            </ul>
          </div>
        </Dialog.Content>
      </>
    ),
  },
};

export const WithLoadingButton: Story = {
  args: {
    children: (
      <>
        <Dialog.Trigger>
          <Button variant="contained" isLoading>
            <AiOutlineSetting /> Settings
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Description>Description</Dialog.Description>
          <div>
            <ul>
              <li>Other info</li>
            </ul>
          </div>
        </Dialog.Content>
      </>
    ),
  },
};

export const WithScrollbar: Story = {
  args: {
    children: (
      <>
        <Dialog.Trigger>
          <Button variant="contained">
            <AiOutlineSetting /> Settings
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.Description>Description</Dialog.Description>
          </Dialog.Header>
          <Dialog.Body>
            <div>
              {Array(20)
                .fill(0)
                .map((item) => (
                  <li>Other info </li>
                ))}
            </div>
          </Dialog.Body>
          <Dialog.Footer>
            <Button variant="contained">Save</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </>
    ),
  },
};
