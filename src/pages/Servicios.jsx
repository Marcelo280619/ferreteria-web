import Navbar from "../components/Navbar/Navbar";
import Tienda from "../components/Tienda/Tienda";
import CarritoLateral from "../components/Carrito/CarritoLateral";
import Footer from "../components/Footer/Footer";
import styles from "./Servicios.module.css";
 
function Servicios({ agregarAlCarrito, carrito, onAumentar, onDisminuir, onEliminar }) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "70px" }}>
        <section className={styles.seccion}>
          <div className={styles.layout}>
            <div className={styles.productos}>
              <Tienda agregarAlCarrito={agregarAlCarrito} />
            </div>
            <div className={styles.carritoWrap}>
              <CarritoLateral
                items={carrito}
                onAumentar={onAumentar}
                onDisminuir={onDisminuir}
                onEliminar={onEliminar}
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
 
export default Servicios;
 