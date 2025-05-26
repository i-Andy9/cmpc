import React, { useEffect, useState } from "react";
import { getBooks } from "../api/librosApi";
import { BookFilters } from "../components/books/BookFilters";
import { BookTable } from "../components/books/BookTable";
import { Pagination } from "../components/common/Pagination";
import { useDebounce } from "../hooks/useDebounce";
import type { Book } from "../types/book";

export const BooksPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    genre: "",
    publisher: "",
    author: "",
    available: "",
    title: "",
  });
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState(false);
  const debouncedSearch = useDebounce(filters.title, 400);

  useEffect(() => {
    setLoading(true);
    let availableValue: boolean | undefined = undefined;
    if (filters.available === "true") availableValue = true;
    if (filters.available === "false") availableValue = false;
    const params: any = {};
    if (filters.genre) params.genre = filters.genre;
    if (filters.publisher) params.publisher = filters.publisher;
    if (filters.author) params.author = filters.author;
    if (filters.title) params.title = debouncedSearch;
    if (filters.available) params.available = availableValue;
    // Paginación opcional
    params.limit = 10;
    params.offset = (page - 1) * 10;
    getBooks(params)
      .then((data) => {
        console.log("Respuesta de getBooks:", data);
        if (Array.isArray(data.books)) {
          setBooks(data.books);
          setTotalPages(1); // O calcula si backend devuelve total
        } else {
          setBooks([]);
          setTotalPages(1);
        }
      })
      .finally(() => setLoading(false));
  }, [
    filters.genre,
    filters.publisher,
    filters.author,
    filters.title,
    filters.available,
    page,
  ]);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters((f) => ({ ...f, [e.target.name]: e.target.value }));
    setPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((f) => ({ ...f, title: e.target.value }));
    setPage(1);
  };

  const handleSort = (field: string) => {
    if (sortBy === field) setSortOrder((o) => (o === "asc" ? "desc" : "asc"));
    else setSortBy(field);
  };

  const handleSearchButton = () => {
    // No action needed; search is handled by useEffect with debouncedSearch
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-red p-6 rounded-xl shadow-md w-full max-w-5xl space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-gray-800">
            📚 Gestión de Libros
          </h1>
          <p className="text-sm text-gray-600">
            Filtra, busca y administra tu inventario de libros.
          </p>
        </header>

        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            🔍 Filtros
          </h2>
          <BookFilters
            {...filters}
            onChange={handleFilterChange}
            search={filters.title || ""}
            onSearchChange={handleSearchChange}
            onSearchButton={handleSearchButton}
            loading={loading}
          />
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            📄 Resultados
          </h2>
          <div className="overflow-x-auto">
            {loading ? (
              <div className="text-center text-gray-500 py-6">
                Cargando libros...
              </div>
            ) : books.length === 0 ? (
              <div className="text-center text-gray-500 py-6">
                No se encontraron libros.
              </div>
            ) : (
              <BookTable
                books={books}
                onSort={handleSort}
                onSelect={(id) => {}}
                sortBy={sortBy}
                sortOrder={sortOrder}
              />
            )}
          </div>
        </section>

        <footer className="flex justify-center pt-4 border-t border-gray-200">
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </footer>
      </div>
    </div>
  );
};
