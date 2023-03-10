import "./Navbar.css";
import Logo from "../../imgs/logo.png";
import { CartWidget } from "./CartWidget/CartWidget";
export const Navbar = () => {
  return (
    <header className="header">
      <div className="header_container">
        <img alt="logo" src={Logo} width="250" heigth="250" />
        <nav className="navbar">
          <p className="navbar_link">Etiqueta 1</p>
          <p className="navbar_link">Etiqueta 2</p>
          <CartWidget color={"brown"} />
        </nav>
      </div>
    </header>
  );
};
