import styles from "./Desarrollador.module.css";

function Desarrollador({ nombre, carrera, ciudad, github, avatar }) {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.avatarWrap}>
          {avatar
            ? <img src={avatar} alt={nombre} className={styles.avatarImg} />
            : <div className={styles.avatarFallback}>{nombre[0]}</div>
          }
        </div>
        <div className={styles.info}>
          <span className={styles.label}>Desarrollador</span>
          <h2 className={styles.nombre}>{nombre}</h2>
          <ul className={styles.datos}>
            <li><span className={styles.key}>Carrera</span> {carrera}</li>
            <li><span className={styles.key}>Ciudad</span> {ciudad}</li>
            <li>
              <span className={styles.key}>GitHub</span>
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                github.com/{github}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Desarrollador;
