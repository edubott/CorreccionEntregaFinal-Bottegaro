import { Navbar } from "./componentes/Navbar/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetail from "./componentes/ItemDetail/ItemDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
