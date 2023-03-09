import "./Navbar.css";
import Logo from "../../imgs/logo.png";
export const Navbar = () => {
  return (
    <header className="header">
      <div className="header_container">
        <img src={Logo} width="250" heigth="250" />
        <nav className="navbar">
          <p className="navbar_link">Etiqueta 1</p>
          <p className="navbar_link">Etiqueta 2</p>
          <p className="navbar_link">Etiqueta 3</p>
        </nav>
      </div>
    </header>
  );
};
