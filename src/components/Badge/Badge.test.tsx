import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Badge from "./Badge";

describe("Badge", () => {
  it("renders", () => {
    render(<Badge>User</Badge>);
  });
});
