import { screen, render, getByRole } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";
describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });
  test("renders a count of 0 initially", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("0");
  });
  test("render 1 after clicked on the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("1");
  });
  test("render 2 after clicking twice on the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    await user.click(incrementButton);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("2");
  });
  test("render 10 after clicking ten times on the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    for (let i = 0; i < 10; i++) {
      await user.click(incrementButton);
    }
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("10");
  });

  test("renders a count of 100 after typing 100 and click on the set button", async () => {
    //we are dealing with user interaction so we begin by calling user.setup()
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "20");
    expect(amountInput).toHaveValue(20);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("20");
  });

  test("Elements are focused on the right order", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
