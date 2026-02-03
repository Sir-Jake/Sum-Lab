import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductCard from "../ProductCard";

describe("ProductCard Component", () => {
  const mockProduct = {
    id: 1,
    name: "Test Coffee",
    description: "Tasty test brew",
    origin: "Testland",
    price: 15.0,
  };

  it("renders product information correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Test Coffee")).toBeInTheDocument();
    expect(screen.getByText("Tasty test brew")).toBeInTheDocument();
    expect(screen.getByText("Origin: Testland")).toBeInTheDocument();
    expect(screen.getByText("$15.00")).toBeInTheDocument();
  });

  it("calls onDelete when delete button is clicked", () => {
    const mockDelete = vi.fn();
    render(<ProductCard product={mockProduct} onDelete={mockDelete} />);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(mockDelete).toHaveBeenCalledTimes(1);
  });
});
