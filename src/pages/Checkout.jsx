import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "./Checkout.module.css";

function Checkout({ carrito, onLimpiarCarrito }) {
  const navigate = useNavigate();
  const [paso, setPaso] = useState(1); // 1: envío, 2: pago, 3: confirmación
  const [metodoPago, setMetodoPago] = useState("");
  const [tipoEntrega, setTipoEntrega] = useState("despacho");
  const [cuotas, setCuotas] = useState(1);
  const [form, setForm] = useState({
    nombre: "", email: "", telefono: "",
    direccion: "", ciudad: "", region: "",
  });
  const [pagado, setPagado] = useState(false);

  const formatoPrecio = (p) =>
    p.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  const subtotal = carrito.reduce((a, i) => a + i.precio * i.cantidad, 0);
  const despacho = tipoEntrega === "despacho" ? 3990 : 0;
  const total = subtotal + despacho;
  const totalItems = carrito.reduce((a, i) => a + i.cantidad, 0);

  const handleForm = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const confirmarPago = () => {
    setPagado(true);
    setPaso(3);
    if (onLimpiarCarrito) onLimpiarCarrito();
  };

  if (carrito.length === 0 && !pagado) {
    return (
      <>
        <Navbar />
        <div className={styles.vacio}>
          <span>🛒</span>
          <h2>Tu carrito está vacío</h2>
          <button onClick={() => navigate("/servicios")}>Ver productos</button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.page}>

        {/* Pasos */}
        <div className={styles.pasos}>
          {["Entrega", "Pago", "Confirmación"].map((label, i) => (
            <div key={i} className={`${styles.paso} ${paso >= i + 1 ? styles.pasoActivo : ""}`}>
              <div className={styles.pasoNum}>{i + 1}</div>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {paso < 3 && (
          <div className={styles.layout}>
            {/* Columna izquierda */}
            <div className={styles.formulario}>

              {/* PASO 1: Entrega */}
              {paso === 1 && (
                <div className={styles.seccion}>
                  <h2 className={styles.seccionTitulo}>📦 Datos de entrega</h2>

                  <div className={styles.tipoEntrega}>
                    <button
                      className={`${styles.opcion} ${tipoEntrega === "despacho" ? styles.opcionActiva : ""}`}
                      onClick={() => setTipoEntrega("despacho")}
                    >
                      🚚 Despacho a domicilio <span>+$3.990</span>
                    </button>
                    <button
                      className={`${styles.opcion} ${tipoEntrega === "retiro" ? styles.opcionActiva : ""}`}
                      onClick={() => setTipoEntrega("retiro")}
                    >
                      🏪 Retiro en tienda <span>Gratis</span>
                    </button>
                  </div>

                  <div className={styles.campos}>
                    <div className={styles.campo}>
                      <label>Nombre completo</label>
                      <input name="nombre" value={form.nombre} onChange={handleForm} placeholder="Ej: Juan Pérez" />
                    </div>
                    <div className={styles.campo}>
                      <label>Correo electrónico</label>
                      <input name="email" value={form.email} onChange={handleForm} placeholder="correo@ejemplo.cl" type="email" />
                    </div>
                    <div className={styles.campo}>
                      <label>Teléfono</label>
                      <input name="telefono" value={form.telefono} onChange={handleForm} placeholder="+56 9 1234 5678" />
                    </div>
                    {tipoEntrega === "despacho" && (
                      <>
                        <div className={styles.campo}>
                          <label>Dirección</label>
                          <input name="direccion" value={form.direccion} onChange={handleForm} placeholder="Calle y número" />
                        </div>
                        <div className={styles.campoRow}>
                          <div className={styles.campo}>
                            <label>Ciudad</label>
                            <input name="ciudad" value={form.ciudad} onChange={handleForm} placeholder="Ej: Curicó" />
                          </div>
                          <div className={styles.campo}>
                            <label>Región</label>
                            <select name="region" value={form.region} onChange={handleForm}>
                              <option value="">Selecciona</option>
                              <option>Región del Maule</option>
                              <option>Región Metropolitana</option>
                              <option>Región de O'Higgins</option>
                              <option>Región del Biobío</option>
                              <option>Otras regiones</option>
                            </select>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <button
                    className={styles.btnSiguiente}
                    onClick={() => setPaso(2)}
                    disabled={!form.nombre || !form.email || !form.telefono}
                  >
                    Continuar al pago →
                  </button>
                </div>
              )}

              {/* PASO 2: Pago */}
              {paso === 2 && (
                <div className={styles.seccion}>
                  <h2 className={styles.seccionTitulo}>💳 Método de pago</h2>

                  <div className={styles.metodos}>
                    {[
                      { id: "debito", icon: "💳", label: "Tarjeta de débito" },
                      { id: "credito", icon: "💰", label: "Tarjeta de crédito" },
                      { id: "transferencia", icon: "🏦", label: "Transferencia bancaria" },
                      { id: "efectivo", icon: "💵", label: "Efectivo en tienda" },
                    ].map((m) => (
                      <button
                        key={m.id}
                        className={`${styles.opcion} ${metodoPago === m.id ? styles.opcionActiva : ""}`}
                        onClick={() => setMetodoPago(m.id)}
                      >
                        {m.icon} {m.label}
                      </button>
                    ))}
                  </div>

                  {/* Cuotas solo para crédito */}
                  {metodoPago === "credito" && (
                    <div className={styles.cuotas}>
                      <h4>Número de cuotas</h4>
                      <div className={styles.cuotasGrid}>
                        {[1, 3, 6, 12, 24, 36].map((c) => (
                          <button
                            key={c}
                            className={`${styles.cuotaBtn} ${cuotas === c ? styles.cuotaActiva : ""}`}
                            onClick={() => setCuotas(c)}
                          >
                            {c === 1 ? "Sin cuotas" : `${c} cuotas`}
                            {c > 1 && (
                              <span>{formatoPrecio(Math.ceil(total / c))}/mes</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Datos tarjeta */}
                  {(metodoPago === "debito" || metodoPago === "credito") && (
                    <div className={styles.campos}>
                      <div className={styles.campo}>
                        <label>Número de tarjeta</label>
                        <input placeholder="1234 5678 9012 3456" maxLength={19} />
                      </div>
                      <div className={styles.campoRow}>
                        <div className={styles.campo}>
                          <label>Vencimiento</label>
                          <input placeholder="MM/AA" maxLength={5} />
                        </div>
                        <div className={styles.campo}>
                          <label>CVV</label>
                          <input placeholder="123" maxLength={4} type="password" />
                        </div>
                      </div>
                      <div className={styles.campo}>
                        <label>Nombre en la tarjeta</label>
                        <input placeholder="Como aparece en la tarjeta" />
                      </div>
                    </div>
                  )}

                  {/* Transferencia */}
                  {metodoPago === "transferencia" && (
                    <div className={styles.infoBox}>
                      <h4>Datos para transferencia</h4>
                      <p><strong>Banco:</strong> Banco Estado</p>
                      <p><strong>Cuenta corriente:</strong> 123456789</p>
                      <p><strong>RUT:</strong> 76.123.456-7</p>
                      <p><strong>Nombre:</strong> Ferretería El Tornillo SpA</p>
                      <p><strong>Correo:</strong> pagos@eltornillo.cl</p>
                      <p className={styles.nota}>Envía el comprobante al correo indicado para confirmar tu pedido.</p>
                    </div>
                  )}

                  {/* Efectivo */}
                  {metodoPago === "efectivo" && (
                    <div className={styles.infoBox}>
                      <h4>Pago en tienda</h4>
                      <p>📍 Av. Principal 1234, Curicó</p>
                      <p>🕐 Lun–Vie: 8:30–18:30</p>
                      <p className={styles.nota}>Presenta tu número de pedido al llegar a la tienda.</p>
                    </div>
                  )}

                  <div className={styles.botonesRow}>
                    <button className={styles.btnVolver} onClick={() => setPaso(1)}>
                      ← Volver
                    </button>
                    <button
                      className={styles.btnSiguiente}
                      onClick={confirmarPago}
                      disabled={!metodoPago}
                    >
                      Confirmar pago ✓
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Resumen lateral */}
            <div className={styles.resumen}>
              <h3 className={styles.resumenTitulo}>Resumen del pedido</h3>
              <div className={styles.resumenItems}>
                {carrito.map((item) => (
                  <div key={item.id} className={styles.resumenItem}>
                    <img src={item.imagen} alt={item.nombre} />
                    <div>
                      <p>{item.nombre}</p>
                      <span>x{item.cantidad}</span>
                    </div>
                    <strong>{formatoPrecio(item.precio * item.cantidad)}</strong>
                  </div>
                ))}
              </div>
              <div className={styles.resumenLineas}>
                <div className={styles.linea}>
                  <span>Subtotal ({totalItems} productos)</span>
                  <span>{formatoPrecio(subtotal)}</span>
                </div>
                <div className={styles.linea}>
                  <span>Despacho</span>
                  <span>{tipoEntrega === "despacho" ? formatoPrecio(despacho) : "Gratis"}</span>
                </div>
                {metodoPago === "credito" && cuotas > 1 && (
                  <div className={styles.linea}>
                    <span>{cuotas} cuotas de</span>
                    <span>{formatoPrecio(Math.ceil(total / cuotas))}/mes</span>
                  </div>
                )}
              </div>
              <div className={styles.resumenTotal}>
                <span>Total</span>
                <span>{formatoPrecio(total)}</span>
              </div>
            </div>
          </div>
        )}

        {/* PASO 3: Confirmación */}
        {paso === 3 && (
          <div className={styles.confirmacion}>
            <div className={styles.confirmIcon}>✅</div>
            <h2>¡Pedido confirmado!</h2>
            <p>Gracias <strong>{form.nombre}</strong>, tu pedido fue recibido exitosamente.</p>
            <p>Te enviaremos los detalles a <strong>{form.email}</strong>.</p>
            <div className={styles.confirmDetalle}>
              <p>🔑 Número de pedido: <strong>#FT-{Math.floor(Math.random() * 90000) + 10000}</strong></p>
              <p>📦 Entrega: <strong>{tipoEntrega === "despacho" ? "Despacho a domicilio" : "Retiro en tienda"}</strong></p>
              <p>💳 Pago: <strong>
                {{ debito: "Tarjeta débito", credito: `Crédito ${cuotas > 1 ? `en ${cuotas} cuotas` : "sin cuotas"}`, transferencia: "Transferencia", efectivo: "Efectivo" }[metodoPago]}
              </strong></p>
              <p>💰 Total pagado: <strong>{formatoPrecio(total)}</strong></p>
            </div>
            <button className={styles.btnVolver} onClick={() => navigate("/")}>
              ← Volver al inicio
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
