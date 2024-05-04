import type { StoryObj } from "@storybook/react";
import {
    BaseField,
    BaseFieldInput,
} from "../components/BaseFieldContainer/BaseFieldContainer";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import { Select, SelectItem } from "../components/Select/Select";

const meta = {
  title: "Examples/CreateAccountForm",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-96 shadow-xl">
      <Card.Header>
        <h1 className="text-xl font-semibold">Create account</h1>
      </Card.Header>
      <Card.Body>
        <form className="flex flex-col gap-4">
          <BaseField required label="Email" id="email">
            <BaseFieldInput id="email" />
          </BaseField>

          <BaseField required label="Full name" id="name">
            <BaseFieldInput id="name" />
          </BaseField>

          <Select
            required
            label="Country"
            id="country"
            info="Selecciona el país o región donde se ha constituido tu empresa. Si eres un particular, selecciona el lugar desde donde realizas tus actividades comerciales."
          >
            <SelectItem value="spain">
              <img
                alt="United States"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"
                className="w-4 rounded-sm"
              />
              <p>Spain</p>
            </SelectItem>
            <SelectItem value="usa">
              <img
                alt="United States"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                className="w-4 rounded-sm"
              />
              United States
            </SelectItem>
          </Select>

          <BaseField required label="Password" id="password">
            <BaseFieldInput id="password" type="password" />
          </BaseField>

          <Button variant="contained" fullWidth>
            Create account
          </Button>
        </form>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>
  ),
};
