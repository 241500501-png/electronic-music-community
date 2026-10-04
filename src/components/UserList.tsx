import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { getUsers } from "../services/api";

// Componente que carga y muestra la lista de usuarios
export default function UserList() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Se obtienen los usuarios de la API
    getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center my-5">
        <div
          className="spinner-border"
          role="status"
          aria-label="Cargando"
        ></div>
        <p className="mt-2">Cargando usuarios...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger my-4" role="alert">
        Ocurrió un error: {error}
      </div>
    );
  }
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        Miembros de la comunidad (API simulada)
      </h2>
      <input
        type="text"
        aria-label="Buscar miembro por nombre"
        className="form-control mb-4"
        placeholder="Buscar miembro por nombre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
