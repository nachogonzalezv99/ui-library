import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import Dialog from "./Dialog";

describe("CopyText", () => {
  it("renders", () => {
    render(
      <Dialog>
        <Dialog.Trigger>
          <button>Click</button>
        </Dialog.Trigger>
      </Dialog>
    );
  });
});
