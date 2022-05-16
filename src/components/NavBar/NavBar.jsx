import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const sections = [
  { idCategoria: "1", name: "remeras", nameButton: "Remeras" },
  { idCategoria: "2", name: "gorras", nameButton: "Gorras" },
  { idCategoria: "3", name: "pantalon", nameButton: "Pantalones" },
];
const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
        <Container>
          <NavLink to="/">Online Shop</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="sections">
              {sections.map((element) => (
                <NavLink key={element.id} to={`/seccion/${element.name}`}>
                  {element.nameButton}
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
