import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Dropdown from "./Dropdown";

describe("CopyText", () => {
  it("renders", () => {
    render(<Dropdown />);
  });
});
