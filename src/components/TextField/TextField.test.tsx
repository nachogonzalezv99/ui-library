import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import TextField from "./TextField";

describe("TextField", () => {
  it("renders", () => {
    render(<TextField id="text1" />);
  });
});
