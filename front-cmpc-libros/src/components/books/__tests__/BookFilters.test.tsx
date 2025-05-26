import { render, screen, fireEvent } from "@testing-library/react";
import { BookFilters } from "../BookFilters";

describe("BookFilters", () => {
  it("renderiza los campos de filtro y el botón de buscar", () => {
    render(
      <BookFilters
        genre=""
        publisher=""
        author=""
        available=""
        onChange={() => {}}
        search=""
        onSearchChange={() => {}}
        onSearchButton={() => {}}
        loading={false}
      />
    );
    expect(screen.getByPlaceholderText("Buscar...")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Autor")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Editorial")).toBeInTheDocument();
    expect(screen.getByText("Buscar")).toBeInTheDocument();
  });

  it("llama a onSearchButton al hacer click en Buscar", () => {
    const onSearchButton = jest.fn();
    render(
      <BookFilters
        genre=""
        publisher=""
        author=""
        available=""
        onChange={() => {}}
        search=""
        onSearchChange={() => {}}
        onSearchButton={onSearchButton}
        loading={false}
      />
    );
    fireEvent.click(screen.getByText("Buscar"));
    expect(onSearchButton).toHaveBeenCalled();
  });
});
