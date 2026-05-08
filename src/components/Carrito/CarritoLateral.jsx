import { useNavigate } from "react-router-dom";
import styles from "./CarritoLateral.module.css";

function CarritoLateral({ items, onAumentar, onDisminuir, onEliminar }) {
  const navigate = useNavigate();
  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  const totalItems = items.reduce((acc, i) => acc + i.cantidad, 0);

  const formatoPrecio = (p) =>
    p.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  return (
    <div className={styles.carrito}>
      <div className={styles.header}>
        <h3 className={styles.titulo}>🛒 Carrito</h3>
        {totalItems > 0 && (
          <span className={styles.badge}>{totalItems} producto{totalItems > 1 ? "s" : ""}</span>
        )}
      </div>

      {items.length === 0 ? (
        <div className={styles.vacio}>
          <span className={styles.vaciIcon}>🛒</span>
          <p>Agrega productos para comenzar</p>
        </div>
      ) : (
        <>
          <div className={styles.lista}>
            {items.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.imagen} alt={item.nombre} className={styles.img} />
                <div className={styles.info}>
                  <p className={styles.nombre}>{item.nombre}</p>
                  <p className={styles.precio}>{formatoPrecio(item.precio)}</p>
                  <div className={styles.cantidad}>
                    <button onClick={() => onDisminuir(item.id)}>−</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => onAumentar(item.id)}>+</button>
                  </div>
                </div>
                <div className={styles.derecha}>
                  <button className={styles.eliminar} onClick={() => onEliminar(item.id)}>✕</button>
                  <p className={styles.subtotal}>{formatoPrecio(item.precio * item.cantidad)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.totalBox}>
            <span>Total</span>
            <span className={styles.totalValor}>{formatoPrecio(total)}</span>
          </div>

          <button
            className={styles.btnPagar}
            onClick={() => navigate("/checkout")}
          >
            Proceder al pago →
          </button>
        </>
      )}
    </div>
  );
}

export default CarritoLateral;
