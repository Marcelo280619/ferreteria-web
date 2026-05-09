import styles from "./Equipo.module.css";

const equipo = [
  {
    nombre: "Roberto Sánchez",
    cargo: "Fundador & Gerente",
    inicial: "R",
    img: "/assets/equipo_roberto.png",
    desc: "Más de 25 años liderando la ferretería con pasión y compromiso.",
  },
  {
    nombre: "Carmen López",
    cargo: "Jefa de Ventas",
    inicial: "C",
    img: "/assets/equipo_carmen.png",
    desc: "Especialista en atención al cliente y gestión comercial.",
  },
  {
    nombre: "Miguel Torres",
    cargo: "Asesor Técnico",
    inicial: "M",
    img: "/assets/equipo_miguel.png",
    desc: "Experto en instalaciones y materiales de construcción.",
  },
  {
    nombre: "Ana Fuentes",
    cargo: "Atención al Cliente",
    inicial: "A",
    img: "/assets/equipo_ana.png",
    desc: "Siempre lista para orientarte en lo que necesites.",
  },
];

function Equipo() {
  return (
    <section className={styles.section} id="equipo">
      <div className={styles.header}>
        <span className={styles.label}>Quiénes somos</span>
        <h2 className={styles.title}>Nuestro Equipo</h2>
        <p className={styles.subtitle}>
          Profesionales comprometidos con darte la mejor atención y asesoría.
        </p>
      </div>
      <div className={styles.grid}>
        {equipo.map((p, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.avatarWrap}>
              <img src={p.img} alt={p.nombre} className={styles.avatarImg}
                onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
              />
              <div className={styles.avatarFallback} style={{display:'none'}}>{p.inicial}</div>
            </div>
            <h3 className={styles.nombre}>{p.nombre}</h3>
            <p className={styles.cargo}>{p.cargo}</p>
            <p className={styles.desc}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Equipo;
