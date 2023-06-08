import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import AlertDialog from "./AlertDialog";
import IconButton from "../IconButton/IconButton";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "../Button";

const meta = {
  title: "AlertDialog",
  component: AlertDialog,
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AlertDialog.Trigger>
          <IconButton>
            <AiOutlineDelete />
          </IconButton>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Título</AlertDialog.Title>
          <AlertDialog.Description>
            Constructs an object type whose property keys are Keys and whose
            property values are Type. This utility can be used to map the
            properties of a type to another type.
          </AlertDialog.Description>
          <div className="justify-end flex gap-2 mt-8">
            <AlertDialog.Action>
              <Button>Cancel</Button>
            </AlertDialog.Action>
            <AlertDialog.Action>
              <Button variant="contained">Save changes</Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </>
    ),
  },
};
export const TriggerDisabled: Story = {
  args: {
    children: (
      <>
        <AlertDialog.Trigger disabled={true}>
          <IconButton>
            <AiOutlineDelete />
          </IconButton>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <div className="justify-end flex gap-2 mt-8">
            <AlertDialog.Action>
              <Button>Cancel</Button>
            </AlertDialog.Action>
            <AlertDialog.Action>
              <Button variant="contained">Save changes</Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </>
    ),
  },
};

export const Destructive: Story = {
  args: {
    children: (
      <>
        <AlertDialog.Trigger>
          <IconButton>
            <AiOutlineDelete />
          </IconButton>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Título</AlertDialog.Title>
          <AlertDialog.Description>
            Constructs an object type whose property keys are Keys and whose
            property values are Type. This utility can be used to map the
            properties of a type to another type.
          </AlertDialog.Description>
          <div className="justify-end flex gap-2 mt-8">
            <AlertDialog.Action>
              <Button>Cancel</Button>
            </AlertDialog.Action>
            <AlertDialog.Action>
              <Button variant="destructive">Delete user</Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </>
    ),
  },
};
