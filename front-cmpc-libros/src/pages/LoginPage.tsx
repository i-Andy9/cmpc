import React from "react";
import { LoginForm } from "../components/auth/LoginForm";

export const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => (
  <div style={{ maxWidth: 400, margin: "2rem auto" }}>
    <LoginForm onLogin={onLogin} />
  </div>
);
