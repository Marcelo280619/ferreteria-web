import Navbar from "../components/Navbar/Navbar";
import Desarrollador from "../components/Desarrollador/Desarrollador";
import Footer from "../components/Footer/Footer";

function DesarrolladorPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "70px" }}>
        <Desarrollador
          nombre="Marcelo Jara"
          carrera="Ingeniería en Computación e Informática"
          ciudad="Curicó"
          github="Marcelo280619"
        />
      </div>
      <Footer />
    </>
  );
}

export default DesarrolladorPage;
