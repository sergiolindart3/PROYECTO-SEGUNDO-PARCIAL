import { Outlet, useNavigate } from "react-router-dom";
import "../styles/principal.css";

function Principal() {
  const navigate = useNavigate(); // Hook para navegación

  // Función para manejar la navegación a otras páginas
  const handleNavigate = (ruta) => {
    navigate(`/${ruta}`);
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "¿Estás seguro de que deseas cerrar sesión?"
    );

    // Si el usuario confirma el cierre de sesión, redirige a la página de inicio de sesión
    if (confirmLogout) {
      // Aquí colocas la lógica para cerrar sesión, como limpiar el token de autenticación, etc.

      // Después de cerrar sesión, redirige a la página de inicio de sesión
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Wallet Go</h3>
        </div>
        <ul className="sidebar-menu">
          <li>
            <button onClick={() => handleNavigate("Inicio")}>Inicio</button>
          </li>
          <li>
            <button onClick={() => handleNavigate("consulta")}>
              Consultar
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigate("cuenta")}>Cuenta</button>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="logout-button">
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
}

export default Principal;
