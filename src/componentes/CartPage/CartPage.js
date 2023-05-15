import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
export const CartPage = () => {
  const { cart } = useContext(CartContext);

  if (cart && totalCantidad > 0) {
    return (
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    );
  }

  return <span>No hay items en el carrito</span>;
};
