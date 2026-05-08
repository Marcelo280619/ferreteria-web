import styles from "./Cards.module.css";

const servicios = [
  {
    icon: "🔧",
    titulo: "Herramientas",
    descripcion: "Amplio stock de herramientas manuales y eléctricas para todo tipo de trabajo.",
  },
  {
    icon: "🪛",
    titulo: "Instalaciones",
    descripcion: "Materiales para instalaciones eléctricas, sanitarias y de gas certificados.",
  },
  {
    icon: "🏗️",
    titulo: "Construcción",
    descripcion: "Cemento, fierro, madera y todo lo necesario para tu obra.",
  },
  {
    icon: "🎨",
    titulo: "Pinturas",
    descripcion: "Las mejores marcas en pinturas, esmaltes y barnices con asesoría de color.",
  },
  {
    icon: "🔩",
    titulo: "Fijaciones",
    descripcion: "Tornillos, pernos, tarugos y todo tipo de fijaciones al por mayor y menor.",
  },
  {
    icon: "🚿",
    titulo: "Gasfitería",
    descripcion: "Tuberías, llaves, conectores y accesorios para baño y cocina.",
  },
];

function Cards() {
  return (
    <section className={styles.section} id="servicios">
      <div className={styles.header}>
        <span className={styles.label}>Lo que ofrecemos</span>
        <h2 className={styles.title}>Nuestros Servicios</h2>
        <p className={styles.subtitle}>
          Más de 25 años entregando soluciones de calidad a constructores,
          contratistas y familias.
        </p>
      </div>
      <div className={styles.grid}>
        {servicios.map((s, i) => (
          <div className={styles.card} key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <span className={styles.icon}>{s.icon}</span>
            <h3 className={styles.cardTitle}>{s.titulo}</h3>
            <p className={styles.cardDesc}>{s.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
