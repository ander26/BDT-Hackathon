import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalButton from "../../components/Buttons/ModalButton/index.js";

describe("ModalButton", () => {
  const handleClick = jest.fn();
  it("Should render a button", () => {
    render(
      <ModalButton onClick={handleClick} type="button">
        Vamos a entrar
      </ModalButton>
    );
    const button = screen.queryByRole("button");
    expect(button).not.toBeNull();
  });
  it("Should render the text introduced", () => {
    render(
      <ModalButton onClick={handleClick} type="button">
        Vamos a entrar
      </ModalButton>
    );
    expect(screen.queryByRole("button")).toHaveTextContent("Vamos a entrar");
  });
  it("Should call onClick prop when clicked", () => {
    render(
      <ModalButton onClick={handleClick} type="button">
        Vamos a entrar
      </ModalButton>
    );
    fireEvent.click(screen.getByText(/Vamos a entrar/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
