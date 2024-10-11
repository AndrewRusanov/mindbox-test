import React from "react";
import { describe, vi, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextField from "../components/TextField";

describe("TextField component", () => {
  it("renders input and button", () => {
    const mockOnChange = vi.fn();
    const mockAddTodo = vi.fn();

    render(
      <TextField value="" onChange={mockOnChange} addTodo={mockAddTodo} />
    );

    const input = screen.getByPlaceholderText("Новая задача");
    const button = screen.getByText("Добавить задачу");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("calls onChange when typing in input", () => {
    const mockOnChange = vi.fn();
    const mockAddTodo = vi.fn();

    render(
      <TextField value="" onChange={mockOnChange} addTodo={mockAddTodo} />
    );

    const input = screen.getByPlaceholderText("Новая задача");

    fireEvent.change(input, { target: { value: "Test task" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("disables button when input is empty", () => {
    const mockOnChange = vi.fn();
    const mockAddTodo = vi.fn();

    render(
      <TextField value="" onChange={mockOnChange} addTodo={mockAddTodo} />
    );

    const button = screen.getByText("Добавить задачу");

    expect(button).toBeDisabled();
  });

  it("calls addTodo when button is clicked", () => {
    const mockOnChange = vi.fn();
    const mockAddTodo = vi.fn();

    render(
      <TextField
        value="Test task"
        onChange={mockOnChange}
        addTodo={mockAddTodo}
      />
    );

    const button = screen.getByText("Добавить задачу");

    fireEvent.click(button);

    expect(mockAddTodo).toHaveBeenCalledTimes(1);
  });
});
