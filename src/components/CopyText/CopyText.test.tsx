import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import CopyText from "./CopyText";

describe("CopyText", () => {
  it("renders", () => {
    render(
      <CopyText>
        <div>Text to copy</div>
      </CopyText>
    );
  });

  it("copy on click button", async() => {
    const user = userEvent.setup()
    render(
      <CopyText>
        <div>Text to copy</div>
      </CopyText>
    );
    const button = screen.getByRole("button");
    await user.click(button);

    const clipboardText = await navigator.clipboard.readText();
    console.log(clipboardText)
    expect(clipboardText).toBe('Text to copy');
  });
});
