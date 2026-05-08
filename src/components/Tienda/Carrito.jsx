import styles from "./Carrito.module.css";

function Carrito({ items, onAumentar, onDisminuir, onEliminar }) {
  const formatoPrecio = (precio) =>
    precio.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  if (items.length === 0) {
    return (
      <div className={styles.carrito}>
        <h3 className={styles.titulo}>🛒 Carrito de compra</h3>
        <div className={styles.vacio}>
          <span>Tu carrito está vacío</span>
          <p>Agrega productos para comenzar</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.carrito}>
      <h3 className={styles.titulo}>🛒 Carrito de compra</h3>

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
            <div className={styles.subtotal}>
              {formatoPrecio(item.precio * item.cantidad)}
            </div>
            <button className={styles.eliminar} onClick={() => onEliminar(item.id)}>✕</button>
          </div>
        ))}
      </div>

      <div className={styles.totalBox}>
        <span className={styles.totalLabel}>Total de la compra</span>
        <span className={styles.totalValor}>{formatoPrecio(total)}</span>
      </div>

      <button className={styles.btnPagar}>
        Proceder al pago →
      </button>
    </div>
  );
}

export default Carrito;
