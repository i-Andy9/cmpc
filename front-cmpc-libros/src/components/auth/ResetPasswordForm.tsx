import React, { useState } from "react";
import { resetPassword } from "../../api/authApi";

export const ResetPasswordForm: React.FC = () => {
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      await resetPassword(resetToken, newPassword);
      setMessage("Contraseña restablecida correctamente.");
    } catch (err: any) {
      setError("No se pudo restablecer la contraseña.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Restablecer contraseña</h2>
      <input
        type="text"
        placeholder="Token de recuperación"
        value={resetToken}
        onChange={(e) => setResetToken(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Nueva contraseña"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <button type="submit">Restablecer</button>
      {message && <div style={{ color: "green" }}>{message}</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};
