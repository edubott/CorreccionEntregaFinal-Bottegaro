import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="list-container">
      <h2 className="list-container_title">Eduardo A Bottegaro</h2>
      <hr />

      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
