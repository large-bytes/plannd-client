import { render, screen } from "@testing-library/react";
import StaffList from "./StaffList";

describe("StaffList", () => {
  test("Given 1 item in an array it returns one list item", () => {
    const mockData01 = [
      {
        id: "abc",
        name: "John Mulaney",
        email: "jmulaney@example.com",
      },
    ];
    render(<StaffList staffListData={mockData01} />);
    const staffList = screen.getByRole<HTMLElement>("list");
    const numberOfChildren = staffList.children.length;
    expect(numberOfChildren).toBe(1);
  });
});
