import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("contains input fields", () => {
  const { getByText } = render(<App />);
  getByText(/First Name/i);
  getByText(/Last Name/i);
  getByText(/Email/i);
  getByText(/Message/i);
});

test("has submit button", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/submit/i);
});