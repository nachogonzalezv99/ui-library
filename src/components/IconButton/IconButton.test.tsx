import React from "react";
import { render, screen } from "@testing-library/react";
import IconButton from "./IconButton";
import '@testing-library/jest-dom'

describe("IconButton", () => {
  it("renders", () => {
    render(<IconButton>Hola</IconButton>);
  });

  it("is disabled", () => {
    render(<IconButton disabled>hola</IconButton>);
    const button = screen.getByRole('button', {name: /hola/i})

    expect(button).toBeDisabled()
  });

  it("is loading", async () => {
    render(<IconButton isLoading>hola</IconButton>);
    const button = screen.getByRole("button", { name: /hola/i });
    const spinner = screen.getByLabelText(/loading/i);

    expect(button).toBeDisabled();
    expect(spinner).toBeInTheDocument();
  });
});
