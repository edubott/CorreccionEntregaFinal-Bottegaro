import { Navbar } from "./componentes/Navbar/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetail from "./componentes/ItemDetail/ItemDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { CartContext } from "./context/CartContext";
import { useState } from "react";
import { CartPage } from "./componentes/CartPage/CartPage";
import LoginScreen from "./componentes/LoginScreen/LoginScreen";

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const agregarAlCarrito = (producto) => {
    if (isInCart(producto.id)) {
      /*TODO: Actualizar el "cantidad" del producto existente*/
    } else {
      setCart([...cart, producto]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const totalCantidad = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        isInCart,
        totalCantidad,
      }}
    >
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
