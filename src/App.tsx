import React from "react";
import Login from "./components/Login";
import UserList from "./components/UserList";
import "./styles.css";

export default function App() {
  return (
    <>
      {/* Encabezado principal */}
      <nav className="navbar navbar-dark bg-dark py-3">
        <div className="container text-center d-block">
          <h1 className="mb-1">Electronic Music Community</h1>
          <p className="mb-0">
            Conectando personas a través de la música electrónica 🎧
          </p>
        </div>
      </nav>
      {/* Formulario de acceso */}
      <Login />
      {/* Lista de usuarios obtenidos de la API */}
      <UserList />

      {/* Pie de página */}
      <footer className="text-center text-muted py-4">
        <small>Hecho con React & Bootstrap</small>
      </footer>
    </>
  );
}
