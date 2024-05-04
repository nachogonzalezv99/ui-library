import type { StoryObj } from "@storybook/react";
import {
  BaseField,
  BaseFieldInput,
} from "../components/BaseFieldContainer/BaseFieldContainer";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import { Select, SelectItem } from "../components/Select/Select";
import Checkbox from "../components/Checkbox/Checkbox";

const meta = {
  title: "Examples/CreateAccountForm",
  parameters: {
    layout: 'centered',
  },
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
            defaultValue="spain"
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
              Spain
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

          <Checkbox id="confirm">
            <p className="text-gray-500 text-sm">
              Quiero recibir correos electrónicos sobre recursos y
              actualizaciones de productos. Si esta casilla está marcada, de vez
              en cuando Stripe te enviará correos electrónicos relevantes que
              pueden ser útiles. Puedes{" "}
              <a href="" className="text-blue-700">
                cancelar la suscripción
              </a>{" "}
              en cualquier momento.{" "}
              <a href="" className="text-blue-700">
                Política de privacidad
              </a>
            </p>
          </Checkbox>

          <Button variant="contained" fullWidth>
            Create account
          </Button>
        </form>
      </Card.Body>
    </Card>
  ),
};
