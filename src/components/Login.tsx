import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [acceso, setAcceso] = useState(false);

  const iniciarSesion = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setMensaje("Completa todos los campos.");
      setAcceso(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMensaje("Ingresa un correo válido.");
      setAcceso(false);
      return;
    }

    if (password.length < 8) {
      setMensaje("La contraseña debe tener al menos 8 caracteres.");
      setAcceso(false);
      return;
    }

    // Credenciales simuladas únicamente para fines académicos
    if (email === "demo@ejemplo.com" && password === "Demo1234") {
      setMensaje("Acceso permitido. ¡Bienvenido!");
      setAcceso(true);
    } else {
      setMensaje("Acceso denegado. Verifica tus datos.");
      setAcceso(false);
    }
  };

  return (
    <div className="container my-4">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-3">Acceso de usuarios</h2>

        <form onSubmit={iniciarSesion}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 8 caracteres"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Ingresar
          </button>

          {mensaje && (
            <div
              className={`alert mt-3 ${
                acceso ? "alert-success" : "alert-danger"
              }`}
              role="alert"
              aria-live="polite"
            >
              {mensaje}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
