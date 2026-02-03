import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductForm from "../ProductForm";

describe("ProductForm Component", () => {
  it("renders all form fields", () => {
    render(<ProductForm onSubmit={() => {}} />);

    expect(screen.getByLabelText(/Coffee Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Origin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  it("calls onSubmit with form data when submitted", () => {
    const mockSubmit = vi.fn();
    render(<ProductForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/Coffee Name/i), {
      target: { value: "New Brew" },
    });
    fireEvent.change(screen.getByLabelText(/Description/i), {
      target: { value: "Fresh" },
    });
    fireEvent.change(screen.getByLabelText(/Origin/i), {
      target: { value: "Brazil" },
    });
    fireEvent.change(screen.getByLabelText(/Price/i), {
      target: { value: "20" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      name: "New Brew",
      description: "Fresh",
      origin: "Brazil",
      price: 20,
    });
  });
});
