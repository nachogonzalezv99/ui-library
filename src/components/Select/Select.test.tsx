import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Select from "./Select";

describe("Select", () => {
  it("renders", () => {
    render(
      <Select>
        <Select.Item value="item1">Tem 1</Select.Item>
      </Select>
    );
  });
});
