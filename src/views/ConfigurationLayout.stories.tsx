import type { StoryObj } from "@storybook/react";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import {
  BaseField,
  BaseFieldSection,
  BaseFieldInput,
} from "../components/BaseFieldContainer/BaseFieldContainer";

const meta = {
  title: "Examples/ConfigurationLayout",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full h-full flex flex-col gap-8">
      <div className="border-b">
        <div className="py-5 mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold">Setting</h1>
        </div>
      </div>
      <div className="mx-auto max-w-2xl flex flex-col gap-4">
        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold mb-2">Page url</h2>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              fugit officia incidunt cupiditate expedita earum delectus laborum
              officiis quos minus tenetur, eaque ullam beatae dicta labore
              maiores, accusantium doloremque. Quo?
            </p>
          </Card.Header>
          <Card.Body>
            <BaseField>
              <BaseFieldSection>https://</BaseFieldSection>
              <BaseFieldInput id="users" />
              <BaseFieldSection>.com</BaseFieldSection>
            </BaseField>
          </Card.Body>
          <Card.Footer className="flex justify-end">
            <Button variant="contained" sz="sm">
              Save
            </Button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Header>
            <h2 className="text-xl font-semibold mb-2">User data</h2>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Card.Header>
          <Card.Body className="flex flex-col gap-3">
            <BaseField id="name" label="Username">
              <BaseFieldInput id="name" />
            </BaseField>

            <div className="flex justify-between gap-3">
              <BaseField id="weight" label="Weight">
                <BaseFieldInput id="weight" endAdornment="kg"/>
              </BaseField>
              <BaseField id="money" label="Money">
                <BaseFieldInput id="money" readOnly startAdornment="$" defaultValue={100}/>
              </BaseField>
            </div>
          </Card.Body>
          <Card.Footer className="flex justify-end">
            <Button variant="contained" sz="sm">
              Save
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  ),
};
