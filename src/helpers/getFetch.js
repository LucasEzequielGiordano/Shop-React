import aros_cara from "../img/aros_cara.jpeg";
import aros_flores from "../img/aros_flores.jpeg";
import aros_planetas from "../img/aros_planetas.jpeg";
import aros_rayos from "../img/aros_rayos.jpeg";

const randomPrice = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const productos = [{
    id: "1",
    name: "Aros Rostro",
    price: randomPrice(200, 250),
    img: aros_cara,
    stock: 5
  },
  {
    id: "2",
    name: "Aros Flores",
    price: randomPrice(200, 250),
    img: aros_flores,
    stock: 5
  },
  {
    id: "3",
    name: "Aros Planetas",
    price: randomPrice(200, 250),
    img: aros_planetas,
    stock: 5
  },
  {
    id: "4",
    name: "Aros Rayos",
    price: randomPrice(200, 250),
    img: aros_rayos,
    stock: 5
  },
];

export const getFetch = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const query = id ? productos.find(producto => producto.id === id) : productos
      resolve(query)
    }, 2000)
  })
}