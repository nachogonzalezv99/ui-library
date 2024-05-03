import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Spinner from "./Spinner";

describe("Spinner", () => {
  it("renders", () => {
    render(<Spinner />);
  });
});
