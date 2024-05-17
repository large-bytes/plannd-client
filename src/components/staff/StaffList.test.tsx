import { render, screen } from "@testing-library/react";
import StaffList from "./StaffList";
import { StaffItemProps } from "./StaffItem";

describe("StaffList", () => {
  test("Given no data it renders no elements inside the ul", () => {
    const mockData01: StaffItemProps[] = [];
    render(<StaffList staffListData={mockData01} />);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });
  test("Given 1 item in an array it returns one list item", () => {
    const mockData02 = [
      {
        id: "abc",
        name: "John Mulaney",
        email: "jmulaney@example.com",
      },
    ];
    render(<StaffList staffListData={mockData02} />);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(1);
  });
  test("Given 2 items in an array it returns two list items", () => {
    const mockData03 = [
      {
        id: "abc",
        name: "John Mulaney",
        email: "jmulaney@example.com",
      },
      {
        id: "def",
        name: "Jane Mulaney",
        email: "jmulaney@example.com",
      },
    ];
    render(<StaffList staffListData={mockData03} />);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(2);
  });
});
