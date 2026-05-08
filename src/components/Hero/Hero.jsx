import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.badge}>Desde 1998</span>
        <h1 className={styles.title}>Ferretería<br /><em>El Tornillo</em></h1>
        <p className={styles.subtitle}>
          Todo lo que tu proyecto necesita, en un solo lugar.
          Calidad, experiencia y atención personalizada.
        </p>
        <div className={styles.actions}>
          <a href="/servicios" className={styles.btnPrimary}>Ver Servicios</a>
          <a href="#contacto" className={styles.btnSecondary}>Contáctanos</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
