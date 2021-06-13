import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SocialButton from "../../components/Buttons/SocialButton/index.js";

describe("SocialButton", () => {
  const handleClick = jest.fn();
  it("Should render a button", () => {
    render(
      <SocialButton onClick={handleClick} type="button">
        Registrar con Google
      </SocialButton>
    );
    const button = screen.queryByRole("button");
    expect(button).not.toBeNull();
  });
  it("Should render the text introduced", () => {
    render(
      <SocialButton onClick={handleClick} type="button">
        Registrar con Google
      </SocialButton>
    );
    expect(screen.queryByRole("button")).toHaveTextContent(
      "Registrar con Google"
    );
  });
  it("Should call onClick prop when clicked", () => {
    render(
      <SocialButton onClick={handleClick} type="button">
        Registrar con Google
      </SocialButton>
    );
    fireEvent.click(screen.getByText(/Registrar con Google/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
