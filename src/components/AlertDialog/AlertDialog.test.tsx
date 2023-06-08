import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import AlertDialog from "./AlertDialog";

describe("AlertDialog", () => {
  it("renders", () => {
    render(
      <AlertDialog>
        <AlertDialog.Trigger>
          <button>Open</button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Título</AlertDialog.Title>
          <AlertDialog.Description>
            Constructs an object type whose property keys are Keys and whose
            property values are Type. This utility can be used to map the
            properties of a type to another type.
          </AlertDialog.Description>
          <div className="justify-end flex gap-2 mt-8">
            <AlertDialog.Action>
              <button>Cancel</button>
            </AlertDialog.Action>
            <AlertDialog.Action>
              <button>Delete user</button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog>
    );
  });
});
