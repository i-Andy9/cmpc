import { useState } from "react";
import { login, logout } from "../api/authApi";

export function useAuth() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<any>(null);

  const handleLogin = async (username: string, password: string) => {
    const data = await login(username, password);
    setToken(data.access_token);
    setUser(data.user);
    localStorage.setItem("token", data.access_token);
    return data;
  };

  const handleLogout = async () => {
    if (token) await logout(token);
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  return { token, user, login: handleLogin, logout: handleLogout };
}
