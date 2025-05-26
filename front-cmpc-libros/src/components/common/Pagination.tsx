import React from "react";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  page,
  totalPages,
  onPageChange,
}) => (
  <div style={{ display: "flex", gap: 8, margin: "1rem 0" }}>
    <button onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
      &lt;
    </button>
    <span>
      Página {page} de {totalPages}
    </span>
    <button
      onClick={() => onPageChange(page + 1)}
      disabled={page >= totalPages}
    >
      &gt;
    </button>
  </div>
);
