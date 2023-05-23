import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const { cart, totalCantidad, vaciarCarrito } = useContext(CartContext);

  if (cart && totalCantidad() > 0) {
    return (
      <div>
        <div>Estos son los productos que tenes en el carrito:</div>
        {cart.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
          </div>
        ))}

        <button onClick={vaciarCarrito}>Vaciar carrito</button>

        <Link to={`/checkout`}>Comprar</Link>
      </div>
    );
  }

  return <span>No hay items en el carrito</span>;
};
