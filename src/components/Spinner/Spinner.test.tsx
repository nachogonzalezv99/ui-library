import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Spinner from "./Spinner";

describe("Spinner", () => {
  it("renders", () => {
    render(<Spinner />);
  });
});
