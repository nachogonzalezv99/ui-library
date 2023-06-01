import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Sidebar from "./Sidebar";

const meta = {
  title: "Sidebar",
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Sidebar.Item>Hola</Sidebar.Item>
        <Sidebar.Item>Hola</Sidebar.Item>
        <Sidebar.Item>Hola</Sidebar.Item>
        <Sidebar.Item>Hola</Sidebar.Item>
      </>
    ),
  },
};

export const WithAccordion: Story = {
  args: {
    children: (
      <>
        <Sidebar.Item>Hola</Sidebar.Item>
        <Sidebar.Item>Hola</Sidebar.Item>
        <Sidebar.Item>Hola</Sidebar.Item>
        <Sidebar.Item>Hola</Sidebar.Item>
        <Sidebar.Accordion title="Settings">
          <Sidebar.Item>Hola</Sidebar.Item>
          <Sidebar.Item>Hola</Sidebar.Item>
        </Sidebar.Accordion>
      </>
    ),
  },
};
