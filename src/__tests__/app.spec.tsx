import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the app component", () => {
  render(<App />);
  const johnText = screen.getByText("Welcome John");
  expect(johnText).toBeInTheDocument();
});