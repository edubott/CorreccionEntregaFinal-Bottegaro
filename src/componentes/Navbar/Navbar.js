import "./Navbar.css";
import Logo from "../../imgs/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const categorias = [
    {
      id: "manuales",
      name: "Manuales",
      pathname: "manuales",
    },
    {
      id: "electricas",
      name: "Electricas",
      pathname: "electricas",
    },
    {
      id: "industriales",
      name: "Industriales",
      pathname: "industriales",
    },
    {
      id: "otros",
      name: "Otros",
      pathname: "otros",
    },
  ];
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-dark header">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/`}>
            <img
              style={{ cursor: "pointer" }}
              alt="logo"
              src={Logo}
              width="250"
              heigth="250"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link
                to={`/`}
                style={{
                  display: "block",
                  padding: "0.5rem 1rem",
                  color: "lightgray",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
              {categorias.map((categoria) => (
                <Link
                  key={categoria.id}
                  to={`/categoria/${categoria.pathname}`}
                  style={{
                    display: "block",
                    padding: "0.5rem 1rem",
                    color: "lightgray",
                    textDecoration: "none",
                  }}
                >
                  {categoria.name}
                </Link>
              ))}
              <Link to={"/carrito"}>
                <CartWidget color={"lightgray"} />
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
