export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  publisher: string;
  available: boolean;
  imageUrl?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
