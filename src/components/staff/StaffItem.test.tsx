import { render, screen } from "@testing-library/react";
import StaffItem from "./StaffItem";

describe("StaffItem", () => {
  test('Correctly renders', () => {
    render(<StaffItem />)
    const staffItem = screen.getByRole('listitem');
    expect(staffItem).toHaveTextContent('John Mulaneyjmulaney@example.com')
  })
});
