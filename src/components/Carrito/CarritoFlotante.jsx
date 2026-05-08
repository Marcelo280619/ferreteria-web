import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CarritoFlotante.module.css";

function CarritoFlotante({ items, onAumentar, onDisminuir, onEliminar }) {
  const [abierto, setAbierto] = useState(false);
  const navigate = useNavigate();

  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  const totalItems = items.reduce((acc, i) => acc + i.cantidad, 0);

  const formatoPrecio = (precio) =>
    precio.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  const irACheckout = () => {
    setAbierto(false);
    navigate("/checkout");
  };

  return (
    <>
      <button className={styles.btnFlotante} onClick={() => setAbierto(!abierto)}>
        🛒
        {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
      </button>

      <div className={`${styles.panel} ${abierto ? styles.panelAbierto : ""}`}>
        <div className={styles.panelHeader}>
          <h3 className={styles.titulo}>🛒 Carrito de compra</h3>
          <button className={styles.cerrar} onClick={() => setAbierto(false)}>✕</button>
        </div>

        {items.length === 0 ? (
          <div className={styles.vacio}>
            <span>Tu carrito está vacío</span>
            <p>Ve a <a href="/servicios">Servicios</a> y agrega productos</p>
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
                  </div>
                  <div className={styles.cantidad}>
                    <button onClick={() => onDisminuir(item.id)}>−</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => onAumentar(item.id)}>+</button>
                  </div>
                  <div className={styles.subtotal}>{formatoPrecio(item.precio * item.cantidad)}</div>
                  <button className={styles.eliminar} onClick={() => onEliminar(item.id)}>✕</button>
                </div>
              ))}
            </div>

            <div className={styles.totalBox}>
              <span>Total</span>
              <span className={styles.totalValor}>{formatoPrecio(total)}</span>
            </div>

            <button className={styles.btnPagar} onClick={irACheckout}>
              Proceder al pago →
            </button>
          </>
        )}
      </div>

      {abierto && <div className={styles.overlay} onClick={() => setAbierto(false)} />}
    </>
  );
}

export default CarritoFlotante;
