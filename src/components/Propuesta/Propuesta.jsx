import styles from "./Propuesta.module.css";

function Propuesta({ titulo, descripcion, items, imagen, estrellas = 5 }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.label}>¿Por qué elegirnos?</span>
          <h2 className={styles.titulo}>{titulo}</h2>
          <p className={styles.descripcion}>{descripcion}</p>
          <div className={styles.estrellas}>
            {Array.from({ length: estrellas }).map((_, i) => (
              <span key={i} className={styles.estrella}>★</span>
            ))}
          </div>
          <ul className={styles.lista}>
            {items.map((item, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.check}>✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imgWrap}>
          <img src={imagen} alt={titulo} className={styles.img} />
        </div>
      </div>
    </section>
  );
}

export default Propuesta;
