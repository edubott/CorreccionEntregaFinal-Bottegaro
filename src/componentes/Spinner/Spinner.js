const Spinner = () => {
  return (
    <div
      style={{
        display: "block",
        position: "fixed",
        top: "50%",
        right: "50%",
        width: 100,
        height: 100,
      }}
      className="spinner-border"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
