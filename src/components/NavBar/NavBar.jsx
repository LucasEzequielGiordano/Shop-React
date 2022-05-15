import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const array = [
  { idCategoria: "1", name: "remeras", nameButton: "Remeras" },
  { idCategoria: "2", name: "gorras", nameButton: "Gorras" },
  { idCategoria: "3", name: "pantalon", nameButton: "Pantalones" },
];
const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "AlgunaClase" : "otraClase"
            }
          >
            Online Shop
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {array.map((param) => (
                <NavLink key={param.id} to={`/seccion/${param.name}`}>
                  {param.nameButton}
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
