import React from "react";
import { render, screen } from "@testing-library/react";
import IconButton from "./Popover";
import "@testing-library/jest-dom";
import Popover from "./Popover";

describe("IconButton", () => {
  it("renders", () => {
    render(
      <Popover>
        <Popover.Trigger>
          <button>hey</button>
        </Popover.Trigger>
        <Popover.Content>
          <div>hey</div>
        </Popover.Content>
      </Popover>
    );
  });
});
