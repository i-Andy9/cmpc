import React from "react";
import type { Book } from "../../types/book";

interface Props {
  books: Book[];
  onSort: (field: string) => void;
  onSelect: (id: string) => void;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

export const BookTable: React.FC<Props> = ({
  books,
  onSort,
  onSelect,
  sortBy,
  sortOrder,
}) => (
  <table>
    <thead>
      <tr>
        <th onClick={() => onSort("title")}>
          Título {sortBy === "title" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
        </th>
        <th onClick={() => onSort("author")}>
          Autor {sortBy === "author" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
        </th>
        <th onClick={() => onSort("genre")}>
          Género {sortBy === "genre" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
        </th>
        <th onClick={() => onSort("publisher")}>
          Editorial{" "}
          {sortBy === "publisher" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
        </th>
        <th onClick={() => onSort("available")}>
          Disponible{" "}
          {sortBy === "available" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
        </th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.genre}</td>
          <td>{book.publisher}</td>
          <td>{book.available ? "Sí" : "No"}</td>
          <td>
            <button onClick={() => onSelect(book.id)}>Ver</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
