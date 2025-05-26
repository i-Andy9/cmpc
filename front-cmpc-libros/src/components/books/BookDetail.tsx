import React from "react";
import type { Book } from "../../types/book";

interface Props {
  book: Book;
}

export const BookDetail: React.FC<Props> = ({ book }) => (
  <div>
    <h2>{book.title}</h2>
    <p>
      <b>Autor:</b> {book.author}
    </p>
    <p>
      <b>Género:</b> {book.genre}
    </p>
    <p>
      <b>Editorial:</b> {book.publisher}
    </p>
    <p>
      <b>Disponible:</b> {book.available ? "Sí" : "No"}
    </p>
    {book.imageUrl && (
      <img src={book.imageUrl} alt={book.title} style={{ maxWidth: 200 }} />
    )}
    <p>
      <b>Descripción:</b> {book.description}
    </p>
    <p>
      <b>Creado:</b> {new Date(book.createdAt).toLocaleString()}
    </p>
    <p>
      <b>Actualizado:</b> {new Date(book.updatedAt).toLocaleString()}
    </p>
  </div>
);
