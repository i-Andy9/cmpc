import { render, screen, fireEvent } from "@testing-library/react";
import { BookTable } from "../BookTable";
import type { Book } from "../../../types/book";

describe("BookTable", () => {
  const books: Book[] = [
    {
      id: "1",
      title: "Libro 1",
      author: "Autor 1",
      genre: "Novela",
      publisher: "Editorial 1",
      available: true,
      createdAt: "",
      updatedAt: "",
    },
    {
      id: "2",
      title: "Libro 2",
      author: "Autor 2",
      genre: "Poesía",
      publisher: "Editorial 2",
      available: false,
      createdAt: "",
      updatedAt: "",
    },
  ];

  it("muestra los libros en la tabla", () => {
    render(
      <BookTable
        books={books}
        onSort={() => {}}
        onSelect={() => {}}
        sortBy="title"
        sortOrder="asc"
      />
    );
    expect(screen.getByText("Libro 1")).toBeInTheDocument();
    expect(screen.getByText("Libro 2")).toBeInTheDocument();
  });

  it("llama a onSort al hacer click en el header", () => {
    const onSort = jest.fn();
    render(
      <BookTable
        books={books}
        onSort={onSort}
        onSelect={() => {}}
        sortBy="title"
        sortOrder="asc"
      />
    );
    fireEvent.click(screen.getByText("Título ↑"));
    expect(onSort).toHaveBeenCalledWith("title");
  });
});
