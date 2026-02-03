import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../Navigation";

describe("Navigation Component", () => {
  it("renders navigation links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("Admin Portal")).toBeInTheDocument();
  });

  it("has correct links hrefs", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );

    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Shop").closest("a")).toHaveAttribute(
      "href",
      "/shop",
    );
    expect(screen.getByText("Admin Portal").closest("a")).toHaveAttribute(
      "href",
      "/admin",
    );
  });
});
