import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        🔩 Ferretería El Tornillo
      </Link>

      <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Menú">
        <span />
        <span />
        <span />
      </button>

      <div className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
        <a href="#equipo" onClick={() => setOpen(false)}>Equipo</a>
        <Link to="/desarrollador" onClick={() => setOpen(false)}>Desarrollador</Link>
        <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        <Link to="/servicios" className={styles.cta} onClick={() => setOpen(false)}>
          Productos 
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
