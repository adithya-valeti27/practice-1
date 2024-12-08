import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/react";
import Button from "./Button";

test("whether the button component is inside the document or not", () => {
  render(<Button />);
  const buttonEl = screen.getByText("Click me");
  expect(buttonEl).toBeInTheDocument();
});
