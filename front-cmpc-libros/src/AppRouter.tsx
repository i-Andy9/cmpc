import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { BooksPage } from "./pages/BooksPage";
import { BookDetailPage } from "./pages/BookDetailPage";
import { BookEditPage } from "./pages/BookEditPage";
import { RequestPasswordResetPage } from "./pages/RequestPasswordResetPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import { HomePage } from "./pages/HomePage";

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/login"
        element={
          <LoginPage onLogin={() => (window.location.href = "/books")} />
        }
      />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/books/:id" element={<BookDetailPage />} />
      <Route path="/books/:id/edit" element={<BookEditPage />} />
      <Route path="/books/new" element={<BookEditPage />} />
      <Route
        path="/request-password-reset"
        element={<RequestPasswordResetPage />}
      />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/books" />} />
    </Routes>
  </BrowserRouter>
);
