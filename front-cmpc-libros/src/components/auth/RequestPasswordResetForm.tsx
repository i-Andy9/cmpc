import React, { useState } from "react";
import { requestPasswordReset } from "../../api/authApi";

export const RequestPasswordResetForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      await requestPasswordReset(email);
      setMessage("Revisa tu correo para el enlace de recuperación.");
    } catch (err: any) {
      setError("No se pudo enviar el correo de recuperación.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Recuperar contraseña</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
      {message && <div style={{ color: "green" }}>{message}</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};
