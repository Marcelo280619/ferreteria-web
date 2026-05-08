import { useRef } from "react";
import ProductoCard from "./ProductoCard";
import styles from "./SeccionProductos.module.css";

function SeccionProductos({ categoria, productos, onAgregar }) {
  const ref = useRef(null);

  const scroll = (dir) => {
    ref.current.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  return (
    <div className={styles.seccion}>
      <div className={styles.header}>
        <h3 className={styles.titulo}>{categoria}</h3>
        <div className={styles.controles}>
          <button className={styles.arrow} onClick={() => scroll(-1)}>‹</button>
          <button className={styles.arrow} onClick={() => scroll(1)}>›</button>
        </div>
      </div>
      <div className={styles.fila} ref={ref}>
        {productos.map((p) => (
          <ProductoCard key={p.id} producto={p} onAgregar={onAgregar} />
        ))}
      </div>
    </div>
  );
}

export default SeccionProductos;
