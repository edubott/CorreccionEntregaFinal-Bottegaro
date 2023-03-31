import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos.js";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.js";

import "./ItemListContainer.css";
import Spinner from "../Spinner/Spinner.js";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setloading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setloading(true);
    pedirDatos()
      .then((response) => {
        const productosFiltrados = response.filter(
          (producto) => producto.categoria === id
        );
        if (!id || id === "home") {
          setProductos(response);
        } else if (productosFiltrados.length > 0) {
          setProductos(productosFiltrados);
        } else {
          setProductos(response);
        }

        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      })
      .finally(() => {
        setloading(false);
      });
  }, [id]);

  return (
    <div className="container my-5">
      {loading ? <Spinner /> : <ItemList items={productos} />}
    </div>
  );
};

export default ItemListContainer;
