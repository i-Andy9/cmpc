import { render, screen } from "@testing-library/react";
import { BookDetail } from "../BookDetail";

describe("BookDetail", () => {
  const book = {
    id: "1",
    title: "El túnel",
    author: "Ernesto Sabato",
    genre: "Novela",
    publisher: "Editorial X",
    available: true,
    createdAt: "",
    updatedAt: "",
  };

  it("muestra los datos del libro", () => {
    render(<BookDetail book={book} />);
    expect(screen.getByText("El túnel")).toBeInTheDocument();
    expect(screen.getByText(/Ernesto Sabato/)).toBeInTheDocument();
    expect(screen.getByText(/Novela/)).toBeInTheDocument();
    expect(screen.getByText(/Editorial X/)).toBeInTheDocument();
    expect(screen.getByText("Sí")).toBeInTheDocument();
  });
});
