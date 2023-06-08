import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("renders", () => {
    render(<Checkbox id="check1" />);
  });
});
