import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="card col-3 m-2" style={{ width: "18rem" }}>
      <img
        src={item.img}
        width="100%"
        className="card-img-top"
        alt="producto"
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <p
          style={{
            fontWeight: "bold",
          }}
        >
          ${item.price}
        </p>
        <Link key={item.id} to={`/item/${item.id}`} state={{ item: item }}>
          <button className="btn btn-primary w-100">Ver más</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
