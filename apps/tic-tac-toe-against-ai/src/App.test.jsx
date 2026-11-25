import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App.jsx";

test("renders the Tic Tac Toe game", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: "Tic Tac Toe" })).toBeInTheDocument();
  expect(screen.getByRole("grid", { name: "Tic Tac Toe board" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Reset" })).toBeInTheDocument();
});
