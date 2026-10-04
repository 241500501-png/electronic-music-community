// Servicio para obtener los usuarios de la API simulada
export async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("No se pudo cargar la lista de usuarios");
  }

  return response.json();
}
