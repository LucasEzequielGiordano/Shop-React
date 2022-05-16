import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const sections = [
  { idCategoria: "1", name: "Aros", nameButton: "Aros" },
  { idCategoria: "2", name: "Pulseras", nameButton: "Pulseras" },
];
const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/">Online Shop</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="sections">
              {sections.map((sec) => (
                <NavLink key={sec.id} to={`/seccion/${sec.name}`}>
                  {sec.nameButton}
                </NavLink>
              ))}
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
