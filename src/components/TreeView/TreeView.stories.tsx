import type { Meta, StoryObj } from "@storybook/react";
import TreeView from "./TreeView";
import React from "react";
import IconButton from "../IconButton/IconButton";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import Dropdown from "../Dropdown/Dropdown";

const meta = {
  title: "TreeView",
  component: TreeView,
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TreeView.Item label="First element">
          <TreeView.Item label="Inner element #2" />
          <TreeView.Item label="Inner element #1">
            <TreeView.Item label="Sub 1.1" />
            <TreeView.Item label="Sub 1.2" />
            <TreeView.Item label="Sub 1.3" />
          </TreeView.Item>
        </TreeView.Item>
        <TreeView.Item label="Second element" />
      </>
    ),
  },
};

export const WithActions: Story = {
  args: {
    children: (
      <>
        <TreeView.Item
          label="First element"
          actions={[
            <IconButton size="sm">
              <AiOutlineDelete />
            </IconButton>,
          ]}
        >
          <TreeView.Item label="Inner element #2" />
          <TreeView.Item label="Inner element #1">
            <TreeView.Item label="Sub 1.1" />
            <TreeView.Item label="Sub 1.2" />
            <TreeView.Item label="Sub 1.3" />
          </TreeView.Item>
        </TreeView.Item>
        <TreeView.Item
          label="Second element"
          actions={[
            <IconButton size="sm">
              <AiOutlineDelete />
            </IconButton>,
          ]}
        />
      </>
    ),
  },
};

const projects = [
  {
    id: 1,
    name: "Aveva Projects",
    code: "AP1",
    estimatedHours: 500,
    userProjectId: 2,
    Charter: [
      {
        id: 1,
        name: "dgvrgr",
        projectId: 1,
      },
    ],
    ProjectSoftwares: [],
  },
  {
    id: 6,
    name: "Project test",
    code: "PT1",
    estimatedHours: 5050,
    userProjectId: 2,
    Charter: [
      {
        id: 5,
        name: "etryutrjtr",
        projectId: 6,
      },
    ],
    ProjectSoftwares: [
      {
        software: {
          id: 7,
          name: "Test Softwares",
          code: "TS1",
          Task: [
            {
              id: 5,
              name: "Task",
              softwareId: 7,
              Subtask: [
                {
                  id: 12,
                  name: "Subtask",
                  taskId: 5,
                },
              ],
            },
          ],
        },
        users: [
          {
            id: 2,
            name: "Sean Saez Fuller",
            email: "sean.saez-fuller@technipenergies.com",
          },
        ],
      },
    ],
  },
];

export const Dynamic: Story = {
  args: {
    children: (
      <>
        {projects.map((project) => (
          <TreeView.Item key={`p-${project.id}`} label={project.name}>
            <TreeView.Item label="Charter">
              {project.Charter.map((charter) => (
                <TreeView.Item key={`c-${charter.id}`} label={charter.name} />
              ))}
            </TreeView.Item>
            <TreeView.Item label="ProjectSoftware">
              {project.ProjectSoftwares.map((projectSoftware) => (
                <>
                  <TreeView.Item label="Software">
                    <TreeView.Item label={projectSoftware.software.name} />
                  </TreeView.Item>
                  <TreeView.Item label="Users">
                    {projectSoftware.users.map((user) => (
                      <TreeView.Item key={`u-${user.id}`} label={user.name} />
                    ))}
                  </TreeView.Item>
                </>
              ))}
            </TreeView.Item>
          </TreeView.Item>
        ))}
      </>
    ),
  },
};
