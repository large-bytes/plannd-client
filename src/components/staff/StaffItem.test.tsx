import { render, screen } from "@testing-library/react";
import StaffItem from "./StaffItem";

describe("StaffItem", () => {
  test("Correctly renders", () => {
    const mockData = {
      id: "abc",
      name: "John Mulaney",
      email: "jmulaney@example.com",
    };
    render(<StaffItem key={mockData.id} {...mockData} />);
    const staffItem = screen.getByRole("listitem");
    expect(staffItem).toHaveTextContent("John Mulaneyjmulaney@example.com");
  });
});
