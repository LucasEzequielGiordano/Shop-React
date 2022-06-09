import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const sections = [
  { idCategory: "1", name: "Aros", nameButton: "Aros" },
  { idCategory: "2", name: "Pulseras", nameButton: "Pulseras" },
];
const NavBar = () => {
  const { quantityTotal } = useCartContext();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/">Online Shop</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="sections">
              <NavLink to={`/categoria/aros`}>Aros</NavLink>
              <NavLink to={`/categoria/pulseras`}>Pulseras</NavLink>
            </Nav>
            <div className="containerCart">
              {quantityTotal()   !== 0 && quantityTotal()}
              <CartWidget />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
