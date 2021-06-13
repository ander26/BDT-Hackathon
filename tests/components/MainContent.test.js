import React from "react";
import { render, screen } from "@testing-library/react";
import MainContent from "../../components/MainContent/index.js";

describe("MainContent", () => {
  it("Shouldn´t render informative text", () => {
    render(<MainContent />);
    expect(() => screen.getByText("Nuwe es la platforma que")).toThrow();
  });
  it("Should render the first view content", () => {
    render(<MainContent />);
    expect(screen.getByText(/¡Únete a la comunidad!/i)).not.toBeNull();
  });
});
