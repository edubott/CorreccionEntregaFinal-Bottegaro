import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.js";
import { collection, getDocs } from "firebase/firestore";
import "./ItemListContainer.css";
import Spinner from "../Spinner/Spinner.js";
import { db } from "../../firebase/config.js";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setloading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setloading(true);

    const productosRef = collection(db, "productos");
    getDocs(productosRef)
      .then((res) => {
        const allProductos = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        const displayProductos = id
          ? allProductos.filter((producto) => producto.categoria === id)
          : allProductos;

        setProductos(displayProductos);
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
