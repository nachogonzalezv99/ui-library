import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("renders", () => {
    render(
      <Sidebar>
        <Sidebar.Item>Item</Sidebar.Item>
      </Sidebar>
    );
  });
});
