import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

test("renders Modal with content", () => {
  render(<Modal>Hello, this is modal content</Modal>);

  const modalElement = screen.getByTestId("modal");
  expect(modalElement).toBeInTheDocument();

  const contentElement = screen.getByText("Hello, this is modal content");
  expect(contentElement).toBeInTheDocument();
});

test("stops propagation when clicking on modal content", () => {
  const mockHandleClick = jest.fn();
  render(
    <Modal>
      <div data-testid="nested-content" onClick={mockHandleClick}>
        Nested content
      </div>
    </Modal>
  );

  const nestedContentElement = screen.getByTestId("nested-content");
  fireEvent.click(nestedContentElement);

  expect(mockHandleClick).toHaveBeenCalled();
});

test("does not propagate click event when clicking on modal", () => {
  const mockHandleClick = jest.fn();
  render(
    <Modal>
      <div data-testid="nested-content" onClick={mockHandleClick}>
        Nested content
      </div>
    </Modal>
  );

  const modalElement = screen.getByTestId("modal");
  fireEvent.click(modalElement);

  expect(mockHandleClick).not.toHaveBeenCalled();
});
