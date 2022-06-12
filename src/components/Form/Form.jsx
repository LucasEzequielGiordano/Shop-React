import { useCartContext } from "../../context/CartContext/CartContext";
import { Button, Form, FormGroup } from "react-bootstrap";
import "./Form.css";

const Formu = () => {
  const { buyOrder, priceTotal, emptyCart } = useCartContext();

  return (
    <Form className="containerForm">
      <FormGroup className="mb-3" controlId="formBasicEmail">
        <div>
          <input autocomplete="off" id="name" placeholder="Ingrese Su Nombre" />
        </div>
      </FormGroup>
      <FormGroup className="mb-3" controlId="formBasicEmail">
        <div>
          <input
            autocomplete="off"
            id="lastName"
            placeholder="Ingrese Su Apellido"
          />
        </div>
      </FormGroup>
      <FormGroup className="mb-3" controlId="formBasicEmail">
        <div>
          <input autocomplete="off" id="email" placeholder="Ingrese Su Email" />
        </div>
      </FormGroup>
      <FormGroup className="mb-3" controlId="formBasicEmail">
        <div>
          <input
            autocomplete="off"
            id="repeatEmail"
            placeholder="Ingrese Nuevamente su Email"
          />
        </div>
      </FormGroup>

      <div>
        <h4 className="totalCompra">Total: ${priceTotal()}</h4>
        <Button className="delete-button btn btn-danger" onClick={emptyCart}>
          Vaciar Carrito
        </Button>
        <Button className="delete-button" onClick={(e) => buyOrder(e)}>
          comprar
        </Button>
      </div>
    </Form>
  );
};

export default Formu;
