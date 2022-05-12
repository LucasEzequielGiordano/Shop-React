import logo from "../../img/ShopReact.webp";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src={logo} alt="logo Bella Vita" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">INICIO</a>
          </li>
          <li>
            <a href="#">PRODUCTOS</a>
          </li>
          <li>
            <a href="#">ACERCA DE</a>
          </li>
          <li>
            <a href="#">CONTACTO</a>
          </li>
        </ul>
      </nav>
      <div className="iconsContainer">
        <input placeholder="search" id="search" className="search" />
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
