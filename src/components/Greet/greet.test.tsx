/**
 * Greet should render the text hello and if a name is passed onto the component
 * It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("Render Correctly", () => {
    render(<Greet />);
    const helloElement = screen.getByText(/hello/i);
    expect(helloElement).toBeInTheDocument();
  });
});

