import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label", () => {
  it("when given value it renders it", () => {
    const value = "test text";

    render(<Label value={value} />);

    expect(screen.getByText(value)).toBeInTheDocument();
  });

  it("given a text then renders it", () => {
    render(<Label />);

    expect(screen.queryByTestId("label")).not.toBeInTheDocument();
  });

  it("when is required and not value", () => {
    render(<Label required={true} />);

    expect(screen.queryByTestId("label")).not.toBeInTheDocument();
  });

  it("when is required and value", () => {
    const value = "test text";
    render(<Label value={value} required={true} />);

    expect(screen.getByText(value)).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });
});
