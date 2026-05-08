import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import Propuesta from "../components/Propuesta/Propuesta";
import Equipo from "../components/Equipo/Equipo";
import Footer from "../components/Footer/Footer";
import Animacion from "../components/Animacion/Animacion";

const propuestaData = {
  titulo: "Más de 25 años construyendo confianza",
  descripcion:
    "En Ferretería El Tornillo nos especializamos en entregar soluciones completas para construcción, remodelación y mantenimiento. Atendemos a familias, contratistas y empresas con el mismo compromiso.",
  items: [
    "Atención personalizada y asesoría técnica gratuita",
    "Más de 5.000 productos disponibles en stock",
    "Precios competitivos con descuentos por volumen",
    "Despacho a domicilio en toda la región del Maule",
    "Garantía en todos nuestros productos",
  ],
  imagen: "/src/assets/propuesta.png",
  estrellas: 5,
};

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Animacion>
        <Cards />
      </Animacion>
      <Animacion delay={100}>
        <Propuesta
          titulo={propuestaData.titulo}
          descripcion={propuestaData.descripcion}
          items={propuestaData.items}
          imagen={propuestaData.imagen}
          estrellas={propuestaData.estrellas}
        />
      </Animacion>
      <Animacion delay={150}>
        <Equipo />
      </Animacion>
      <Footer />
    </>
  );
}

export default Home;
