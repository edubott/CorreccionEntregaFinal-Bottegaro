import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const CheckoutScreen = () => {
  const { vaciarCarrito, totalCantidad } = useContext(CartContext);

  const [isCompraFinalizada, setIsCompraFinalizada] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setValues({
        ...values,
        name: e.target.value,
      });
    }

    if (e.target.name === "address") {
      setValues({
        ...values,
        address: e.target.value,
      });
    }

    if (e.target.name === "email") {
      setValues({
        ...values,
        email: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    vaciarCarrito();

    setIsCompraFinalizada(true);
  };

  if (totalCantidad() === 0) {
    return (
      <div>
        <div>Usted no tiene productos en el carrito.</div>
        <Link to={"/"}>Volver al inicio</Link>
      </div>
    );
  }

  if (isCompraFinalizada) {
    return (
      <div>
        <div>Muchas gracias por su compra! Que lo disfrutes {values.name}</div>
        <Link to={"/"}>Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div>
      <div>Finaliza tu compra</div>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          value={values.name}
          type={"text"}
          className="form-control my-2"
          placeholder="Tu nombre"
        />
        <input
          onChange={handleChange}
          name="email"
          value={values.email}
          type={"email"}
          className="form-control my-2"
          placeholder="Tu email"
        />
        <input
          onChange={handleChange}
          name="address"
          value={values.address}
          type={"text"}
          className="form-control my-2"
          placeholder="Tu direccion"
        />

        <button className="btn btn-primary" type="submit">
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default CheckoutScreen;
