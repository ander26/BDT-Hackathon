import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MainButton from "../../components/Buttons/MainButton/index.js";

describe("MainButton", () => {
  const handleClick = jest.fn();
  it("Should render a button", () => {
    render(
      <MainButton onClick={handleClick} type="button">
        Crear
      </MainButton>
    );
    const button = screen.queryByRole("button");
    expect(button).not.toBeNull();
  });
  it("Should render the text introduced", () => {
    render(
      <MainButton onClick={handleClick} type="button">
        Crear
      </MainButton>
    );
    expect(screen.queryByRole("button")).toHaveTextContent("Crear");
  });
  it("Should call onClick prop when clicked", () => {
    render(
      <MainButton onClick={handleClick} type="button">
        Crear
      </MainButton>
    );
    fireEvent.click(screen.getByText(/crear/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
