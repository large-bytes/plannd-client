import { render, screen } from "@testing-library/react";
import Staff from "./Staff";

describe("Staff", () => {
  test("loads correctly", () => {
    render(<Staff />);
    const header = screen.getByRole("heading");
    expect(header).toHaveTextContent("Staff");
  });
});
