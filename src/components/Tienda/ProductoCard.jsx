import styles from "./ProductoCard.module.css";

function ProductoCard({ producto, onAgregar }) {
  const formatoPrecio = (precio) =>
    precio.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={producto.imagen} alt={producto.nombre} className={styles.img} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.nombre}>{producto.nombre}</h4>
        <p className={styles.precio}>{formatoPrecio(producto.precio)}</p>
        <button className={styles.btn} onClick={() => onAgregar(producto)}>
          🛒 Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductoCard;
