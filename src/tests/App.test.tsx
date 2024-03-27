import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("loads correctly", () => {
    render(<App />);

    const header = screen.getByRole("heading");
    const button = screen.getByRole("button");

    expect(header).toHaveTextContent("Home Page");
    expect(button).toHaveTextContent("Get Data");
  });
  test("should load data if the button is clicked", async () => {
    render(<App />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    // used findByRole as this has a delay
    const list = await screen.findByRole("listitem");

    expect(list).toBeInTheDocument();
  });
});
