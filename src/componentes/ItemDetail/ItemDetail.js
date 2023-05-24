import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Spinner from "../Spinner/Spinner";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetail = () => {
  const { agregarAlCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  const handleAgregar = () => {
    const newProducto = {
      ...producto,
      cantidad,
    };
    agregarAlCarrito(newProducto);
  };

  useEffect(() => {
    setloading(true);
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          setProducto({ id: doc.id, ...doc.data() });
        }
      })
      .finally(() => setloading(false));
  }, [navigate, id]);

  if (loading) {
    return <Spinner />;
  }

  return producto ? (
    <div className="container my-5">
      <div className="d-flex ">
        <div>
          <h3>Nombre: </h3>
          <h5>{producto.name}</h5>
          <h3>Descripcion</h3>
          <h5>{producto.description}</h5>
          <h3>Precio</h3>
          <h5>$ {producto.price}</h5>
          <h3>Categoria</h3>
          <h5>{producto.categoria}</h5>
          <h3>Stock</h3>
          <h5>{producto.stock - cantidad}</h5>
        </div>
        <div>
          <img alt="producto" src={producto.img} />
        </div>
      </div>

      <ItemCount
        max={producto.stock}
        cantidad={cantidad}
        setCantidad={setCantidad}
        agregar={handleAgregar}
      />
    </div>
  ) : (
    <div>Producto no encontrado</div>
  );
};

export default ItemDetail;
