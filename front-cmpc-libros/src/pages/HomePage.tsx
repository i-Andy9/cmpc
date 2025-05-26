import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import reactLogo from "../assets/react.svg";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col gap-6 w-full max-w-md items-center mx-auto">
        <img
          src={reactLogo}
          alt="Logo"
          className={`w-20 h-20 mb-2 ${
            token ? "opacity-100" : "opacity-30 grayscale"
          }`}
        />
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          CMPC Libros
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Bienvenido. ¿Qué deseas hacer?
        </p>
        <div className="flex flex-col gap-4 w-full">
          <button
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            onClick={() => navigate("/login")}
          >
            Ingresar como usuario
          </button>
          <button
            className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
            onClick={() => navigate("/books")}
          >
            Buscar libros
          </button>
        </div>
        <span
          className={`mt-4 text-sm font-semibold ${
            token ? "text-green-600" : "text-gray-400"
          }`}
        >
          {token ? "Conectado" : "No conectado"}
        </span>
      </div>
    </div>
  );
};
