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
import CheckoutScreen from "./componentes/CheckoutScreen/CheckoutScreen";

function App() {
  const [cart, setCart] = useState([]);
 }
  const agregarAlCarrito = (producto) => {
    if (isInCart(producto.id)) {
      /*TODO: Actualizar el "cantidad" del producto existente*/
    } else {
      setCart([...cart, producto]);
    }
  };

  const vaciarCarrito = () => {
    setCart([]);
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
        vaciarCarrito,
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
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/checkout" element={<CheckoutScreen />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
