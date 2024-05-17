import { render, screen } from "@testing-library/react";
import Rota from "./Rota";

describe("Rota", () => {
  test("loads correctly", () => {
    render(<Rota />);
    const header = screen.getByRole<HTMLElement>("heading");
    expect(header).toHaveTextContent("Rota");
  });
});
