import React from "react";
import { BookForm } from "../components/books/BookForm";

export const BookEditPage: React.FC = () => {
  // Aquí puedes obtener el libro a editar si es necesario
  const handleSubmit = (formData: FormData) => {
    // Lógica para crear o actualizar libro
  };
  return (
    <div>
      <h2>Alta/Edición de Libro</h2>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};
