import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Bottom from "../components/Bottom";
import { Filters } from "../app/types/types";
import React from "react";
import "@testing-library/jest-dom";

describe("Bottom component", () => {
  const mockSetFilter = vi.fn();
  const mockSelectAll = vi.fn();

  const todos = [
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false },
  ];

  it("renders the correct number of remaining tasks", () => {
    render(
      <Bottom
        needTodo={todos}
        filter={Filters.ALL}
        setFilter={mockSetFilter}
        selectAll={mockSelectAll}
      />
    );

    const tasksInfo = screen.getByText(/2 задачи осталось/i);
    expect(tasksInfo).toBeInTheDocument();
  });

  it("renders all filter buttons", () => {
    render(
      <Bottom
        needTodo={todos}
        filter={Filters.ALL}
        setFilter={mockSetFilter}
        selectAll={mockSelectAll}
      />
    );

    const allFilter = screen.getByText(Filters.ALL);
    const activeFilter = screen.getByText(Filters.ACTIVE);
    const completedFilter = screen.getByText(Filters.COMPLETED);

    expect(allFilter).toBeInTheDocument();
    expect(activeFilter).toBeInTheDocument();
    expect(completedFilter).toBeInTheDocument();
  });

  it("calls setFilter when filter button is clicked", () => {
    render(
      <Bottom
        needTodo={todos}
        filter={Filters.ALL}
        setFilter={mockSetFilter}
        selectAll={mockSelectAll}
      />
    );

    const activeFilterButton = screen.getByText(Filters.ACTIVE);
    fireEvent.click(activeFilterButton);

    expect(mockSetFilter).toHaveBeenCalledWith(Filters.ACTIVE);
  });

  it('calls selectAll when "Выполнить все" is clicked', () => {
    render(
      <Bottom
        needTodo={todos}
        filter={Filters.ALL}
        setFilter={mockSetFilter}
        selectAll={mockSelectAll}
      />
    );

    const selectAllButton = screen.getByText(/выполнить все/i);
    fireEvent.click(selectAllButton);

    expect(mockSelectAll).toHaveBeenCalledTimes(1);
  });
});
