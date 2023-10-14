import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";
import user from "@testing-library/user-event";
describe("Counter 2", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const headingElement = screen.getByRole("heading", { name: "Counter Two" });
    expect(headingElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    await user.click(incrementButton);
    await user.click(decrementButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    // expect(decrementButton).toHaveBeenCalledTimes(1)
  });
});
