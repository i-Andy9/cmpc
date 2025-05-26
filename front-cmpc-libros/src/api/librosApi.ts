import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export interface BookFilters {
  genre?: string;
  publisher?: string;
  author?: string;
  available?: boolean;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

function buildQueryString(params: Record<string, any>) {
  const query = Object.entries(params)
    .filter(([_, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
  return query ? `?${query}` : "";
}

export const getBooks = async (filters: BookFilters = {}) => {
  const query = buildQueryString(filters);
  const { data } = await axios.get(`${API_URL}/book${query}`);
  return data;
};

export const getBook = async (id: string) => {
  const { data } = await axios.get(`${API_URL}/book/${id}`);
  return data;
};

export const createBook = async (formData: FormData) => {
  const { data } = await axios.post(`${API_URL}/book`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const updateBook = async (id: string, formData: FormData) => {
  const { data } = await axios.patch(`${API_URL}/book/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};
