import React, { useState } from "react";
import type { Book } from "../../types/book";

interface Props {
  initialData?: Partial<Book>;
  onSubmit: (data: FormData) => void;
  loading?: boolean;
}

export const BookForm: React.FC<Props> = ({
  initialData = {},
  onSubmit,
  loading,
}) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [author, setAuthor] = useState(initialData.author || "");
  const [genre, setGenre] = useState(initialData.genre || "");
  const [publisher, setPublisher] = useState(initialData.publisher || "");
  const [available, setAvailable] = useState(initialData.available ?? true);
  const [description, setDescription] = useState(initialData.description || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!title || !author || !genre || !publisher || !price) {
      setError("Todos los campos son obligatorios");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("genre", genre);
    formData.append("publisher", publisher);
    formData.append("available", String(available));
    formData.append("description", description);
    formData.append("price", String(price));
    if (image) formData.append("image", image);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold text-gray-900">Libro</h2>
        <p className="mt-1 text-sm text-gray-600">
          Completa la información del libro. Todos los campos son obligatorios.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-900"
            >
              Título
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-900"
            >
              Autor
            </label>
            <div className="mt-2">
              <input
                id="author"
                name="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="publisher"
              className="block text-sm font-medium text-gray-900"
            >
              Editorial
            </label>
            <div className="mt-2">
              <input
                id="publisher"
                name="publisher"
                type="text"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-900"
            >
              Género
            </label>
            <div className="mt-2">
              <input
                id="genre"
                name="genre"
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-900"
            >
              Precio
            </label>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="available"
              className="block text-sm font-medium text-gray-900"
            >
              Disponible
            </label>
            <div className="mt-2">
              <select
                id="available"
                name="available"
                value={available ? "true" : "false"}
                onChange={(e) => setAvailable(e.target.value === "true")}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              >
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-900"
            >
              Descripción
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Describe brevemente el libro.
            </p>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-900"
            >
              Imagen
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>
          </div>
        </div>
      </div>
      {error && (
        <div className="text-red-600 text-center text-sm mt-2">{error}</div>
      )}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold text-gray-900"
          disabled={loading}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </div>
    </form>
  );
};
