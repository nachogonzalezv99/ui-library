import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("renders", () => {
    render(<Button>Hola</Button>);
  });

  it("is disabled", async () => {
    render(<Button disabled>hola</Button>);
    const button = screen.getByRole("button", { name: /hola/i });
    expect(button).toBeDisabled();
  });

  it("is loading", async () => {
    render(<Button isLoading>hola</Button>);
    const button = screen.getByRole("button", { name: /hola/i });
    const spinner = screen.getByLabelText(/loading/i);

    expect(button).toBeDisabled();
    expect(spinner).toBeInTheDocument();
  });
});
