import React from "react";

interface Props {
  genre: string;
  publisher: string;
  author: string;
  available: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  search: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchButton: () => void;
  loading: boolean;
}

export const BookFilters: React.FC<Props> = ({
  genre,
  publisher,
  author,
  available,
  onChange,
  search,
  onSearchChange,
  onSearchButton,
  loading,
}) => (
  <div className="flex flex-col md:flex-row gap-4 mb-4 items-end">
    <div className="flex flex-col gap-2">
      <label className="font-semibold">Buscar</label>
      <div className="flex gap-2">
        <input
          name="search"
          placeholder="Buscar..."
          value={search}
          onChange={onSearchChange}
          className="input input-bordered"
        />
        <button
          type="button"
          onClick={onSearchButton}
          className="btn btn-primary"
        >
          Buscar
        </button>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <label className="font-semibold">Autor</label>
      <input
        name="author"
        placeholder="Autor"
        value={author}
        onChange={onChange}
        className="input input-bordered"
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="font-semibold">Editorial</label>
      <input
        name="publisher"
        placeholder="Editorial"
        value={publisher}
        onChange={onChange}
        className="input input-bordered"
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="font-semibold">Género</label>
      <select
        name="genre"
        value={genre}
        onChange={onChange}
        className="input input-bordered"
      >
        <option value="">Todos</option>
        <option value="novela">Novela</option>
        <option value="poesía">Poesía</option>
        <option value="ensayo">Ensayo</option>
        <option value="cuento">Cuento</option>
      </select>
    </div>
    <div className="flex flex-col gap-2">
      <label className="font-semibold">Disponibilidad</label>
      <select
        name="available"
        value={available}
        onChange={onChange}
        className="input input-bordered"
      >
        <option value="">Todas</option>
        <option value="true">Disponible</option>
        <option value="false">No disponible</option>
      </select>
    </div>
    {loading && <span className="ml-4 animate-spin">⏳</span>}
  </div>
);
