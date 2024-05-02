import { fireEvent, render, screen } from "@testing-library/react";
import { NumberField } from "./NumberField";
import { act } from "react-dom/test-utils";

describe("NumberField", () => {
  it("when not default value renders and empty string", () => {
    const label = "Total users";

    render(<NumberField label={label} id="users" />);

    expect(screen.getByLabelText(label)).toHaveValue("");
  });

  it("when sum", () => {
    const label = "Total users";

    render(<NumberField label={label} id="users" defaultValue={0} />);

    fireEvent.click(screen.getByRole("button", { name: "+" }))
    

    expect(screen.getByLabelText(label)).toHaveValue("1");
  });

  it("when rest", () => {
    const label = "Total users";

    render(<NumberField label={label} id="users" defaultValue={5} />);

    fireEvent.click(screen.getByRole("button", { name: "-" }))
    

    expect(screen.getByLabelText(label)).toHaveValue("4");
  });
});
