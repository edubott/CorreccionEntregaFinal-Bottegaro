import "./Navbar.css";
import Logo from "../../imgs/logo.png";
import { CartWidget } from "./CartWidget/CartWidget";
export const Navbar = () => {
  const categorias = ["Etiqueta 1", "Etiqueta 2", "Etiqueta 3"];
  return (
    <header className="header">
      <div className="header_container">
        <nav className="navbar">
          <div>
            <img
              style={{ cursor: "pointer" }}
              alt="logo"
              src={Logo}
              width="250"
              heigth="250"
            />
          </div>
          <div className="link-container">
            {categorias.map((categoria) => (
              <p className="navbar_link">{categoria}</p>
            ))}
          </div>
          <CartWidget color={"brown"} />
        </nav>
      </div>
    </header>
  );
};
