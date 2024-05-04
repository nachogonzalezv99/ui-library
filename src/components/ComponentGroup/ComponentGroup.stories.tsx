import type { Meta, StoryObj } from "@storybook/react";
import { AiOutlineCopy, AiOutlineDelete, AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";
import { BaseFieldInput } from "../BaseFieldContainer/BaseFieldContainer";
import { ButtonContent } from "../Button/Button";
import { IconButtonContent } from "../IconButton/IconButton";
import ComponentGroup from "./ComponentGroup";

const meta = {
  title: "ComponentGroup",
  component: ComponentGroup,
} satisfies Meta<typeof ComponentGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ButtonContent>First</ButtonContent>
        <ButtonContent>Second</ButtonContent>
        <ButtonContent>Last</ButtonContent>
      </>
    ),
  },
};

export const WithIconButton: Story = {
  args: {
    children: (
      <>
        <IconButtonContent>
          <AiOutlineDelete />
        </IconButtonContent>
        <IconButtonContent>
          <AiOutlineCopy />
        </IconButtonContent>
        <IconButtonContent>
          <AiOutlineEdit />
        </IconButtonContent>
      </>
    ),
  },
};

export const Combine: Story = {
  args: {
    children: (
      <>
        <IconButtonContent>
          <AiOutlineDelete />
        </IconButtonContent>
        <ButtonContent>Second</ButtonContent>
        <ButtonContent>Second</ButtonContent>
        <ButtonContent variant="contained">Second</ButtonContent>
        <BaseFieldInput id="weight" startAdornment={<AiOutlineSearch />} />
        <IconButtonContent>
          <AiOutlineEdit />
        </IconButtonContent>
      </>
    ),
  },
};
