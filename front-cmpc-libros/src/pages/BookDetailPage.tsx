import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../api/librosApi";
import { BookDetail } from "../components/books/BookDetail";
import type { Book } from "../types/book";

export const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (id) getBook(id).then(setBook);
  }, [id]);

  if (!book) return <div>Cargando...</div>;
  return <BookDetail book={book} />;
};
