import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { useCartContext } from "../../context/CartContext/CartContext";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

// It's a React component that renders a Bootstrap Navbar.
const NavBar = () => {
  const { quantityTotal } = useCartContext();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/">Bella Vita</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="sections">
              <NavLink to={`/categoria/aros`}>Aros</NavLink>
              <NavLink to={`/categoria/pulseras`}>Pulseras</NavLink>
              <NavLink to={`/categoria/relojes`}>Relojes</NavLink>
            </Nav>
            <div className="containerCart">
              {quantityTotal() === 0 ? null : quantityTotal()}
              <CartWidget />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
