import { render, screen } from "@testing-library/react";
import StaffList from "./StaffList";

describe("StaffList", () => {
  test("Given 1 item it returns one list item", () => {
    render(<StaffList />);
    const staffList = screen.getByRole<HTMLElement>("list");
    const numberOfChildren = staffList.children.length;
    expect(numberOfChildren).toBe(1);
  });
});
