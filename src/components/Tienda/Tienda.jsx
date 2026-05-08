import SeccionProductos from "./SeccionProductos";
import productos from "../../data/productos";
import styles from "./Tienda.module.css";

const categorias = [...new Set(productos.map((p) => p.categoria))];

function Tienda({ agregarAlCarrito }) {
  return (
    <section className={styles.section} id="tienda">
      <div className={styles.header}>
        <span className={styles.label}>Catálogo</span>
        <h2 className={styles.titulo}>Nuestros Productos</h2>
        <p className={styles.subtitulo}>
          Encuentra todo lo que necesitas para tu proyecto
        </p>
      </div>
      <div className={styles.layout}>
        {categorias.map((cat) => (
          <SeccionProductos
            key={cat}
            categoria={cat}
            productos={productos.filter((p) => p.categoria === cat)}
            onAgregar={agregarAlCarrito}
          />
        ))}
      </div>
    </section>
  );
}

export default Tienda;
