import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      fontFamily: "Georgia, serif",
      textAlign: "center",
      gap: "1rem"
    }}>
      <h1 style={{ fontSize: "5rem", color: "#c8a84b" }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", color: "#1a1a1a" }}>Página no encontrada</h2>
      <p style={{ color: "#666" }}>La página que buscas no existe.</p>
      <Link to="/" style={{
        marginTop: "1rem",
        background: "#c8a84b",
        color: "#1a1a1a",
        padding: "0.8rem 2rem",
        textDecoration: "none",
        fontWeight: "700",
        borderRadius: "3px"
      }}>
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
