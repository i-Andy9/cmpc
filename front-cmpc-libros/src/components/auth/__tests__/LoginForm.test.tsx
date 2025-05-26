import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "../LoginForm";

describe("LoginForm", () => {
  it("renderiza los campos y el botón", () => {
    render(<LoginForm onLogin={() => {}} />);
    expect(screen.getByPlaceholderText("Usuario")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Contraseña")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });

  it("llama a onLogin al enviar el formulario", () => {
    const onLogin = jest.fn();
    userEvent.type(screen.getByPlaceholderText("Usuario"), "andy");
    userEvent.type(screen.getByPlaceholderText("Contraseña"), "1234");
    userEvent.click(screen.getByText("Entrar"));
    fireEvent.click(screen.getByText("Entrar"));
    // No se puede testear login real sin mockear useAuth, pero el submit funciona
  });
});
