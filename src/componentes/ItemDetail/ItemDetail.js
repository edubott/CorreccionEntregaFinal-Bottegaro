import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pedirDatos } from "../../helpers/pedirDatos";
import Spinner from "../Spinner/Spinner";

const ItemDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    pedirDatos()
      .then((response) => {
        const productoFiltrado = response.find(
          (producto) => producto.id === Number(id)
        );

        if (productoFiltrado) {
          setProducto(productoFiltrado);
        } else {
          navigate("/");
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
  }, [navigate, id]);

  return loading ? (
    <Spinner />
  ) : producto ? (
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
        </div>
        <div>
          <img alt="producto" src={producto.img} />
        </div>
      </div>
    </div>
  ) : null;
};

export default ItemDetail;
