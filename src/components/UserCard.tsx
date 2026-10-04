const images = [
  "https://images.unsplash.com/photo-1544785349-c4a5301826fd?w=800",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
  "https://images.unsplash.com/photo-1571397159741-66c04a38ab99?w=800",
];

// Componente que muestra la información de cada usuario
export default function UserCard({ user }: { user: any }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-3">
      <div className="card h-100 shadow-sm">
        <img
          src={images[(user.id - 1) % images.length]}
          className="card-img-top"
          alt="Música electrónica"
        />
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>

          <p className="card-text mb-1">
            <strong>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="me-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-.5a.5.5 0 0 0-.5.5v.217l6.5 3.9 6.5-3.9V4a.5.5 0 0 0-.5-.5H2zm12.5 2.467-4.803 2.882L14.5 11.8V5.967zm-.034 7.033L8.728 9.47 8 9.907l-.728-.437L1.534 13h12.932zM1.5 11.8l4.803-2.951L1.5 5.967V11.8z" />
              </svg>
              Correo:
            </strong>{" "}
            {user.email}
          </p>

          <p className="card-text mb-1">
            <strong>Teléfono:</strong> {user.phone}
          </p>

          <p className="card-text">
            <strong>Ciudad:</strong> {user.address?.city}
          </p>
        </div>
      </div>
    </div>
  );
}
