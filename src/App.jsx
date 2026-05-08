import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import DesarrolladorPage from "./pages/DesarrolladorPage";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((i) => i.id === producto.id);
      if (existe) return prev.map((i) => i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i);
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const aumentar = (id) =>
    setCarrito((prev) => prev.map((i) => i.id === id ? { ...i, cantidad: i.cantidad + 1 } : i));

  const disminuir = (id) =>
    setCarrito((prev) =>
      prev.map((i) => i.id === id ? { ...i, cantidad: i.cantidad - 1 } : i).filter((i) => i.cantidad > 0)
    );

  const eliminar = (id) => setCarrito((prev) => prev.filter((i) => i.id !== id));

  const limpiarCarrito = () => setCarrito([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home agregarAlCarrito={agregarAlCarrito} />} />
        <Route
          path="/servicios"
          element={
            <Servicios
              carrito={carrito}
              agregarAlCarrito={agregarAlCarrito}
              onAumentar={aumentar}
              onDisminuir={disminuir}
              onEliminar={eliminar}
            />
          }
        />
        <Route path="/desarrollador" element={<DesarrolladorPage />} />
        <Route
          path="/checkout"
          element={<Checkout carrito={carrito} onLimpiarCarrito={limpiarCarrito} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
