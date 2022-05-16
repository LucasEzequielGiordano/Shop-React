import aros_cara from "../img/aros_cara.jpeg";
import aros_flores from "../img/aros_flores.jpeg";
import aros_planetas from "../img/aros_planetas.jpeg";
import aros_rayos from "../img/aros_rayos.jpeg";
import aros_serpiente from "../img/aros_serpientes.jpeg";
import pulseras_coronas from "../img/pulseras_coronas.jpeg";
import pulseras_perlas from "../img/pulseras_perlas.jpeg";

const randomPrice = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const productos = [{
    id: "1",
    name: "Aros Rostro",
    category: 'Aros',
    price: randomPrice(200, 250),
    img: aros_cara,
    stock: 5
  },
  {
    id: "2",
    name: "Aros Flores",
    category: 'Aros',
    price: randomPrice(200, 250),
    img: aros_flores,
    stock: 5
  },
  {
    id: "3",
    name: "Aros Planetas",
    category: 'Aros',
    price: randomPrice(200, 250),
    img: aros_planetas,
    stock: 5
  },
  {
    id: "4",
    name: "Aros Rayos",
    category: 'Aros',
    price: randomPrice(200, 250),
    img: aros_rayos,
    stock: 5
  },
  {
    id: "5",
    name: "Aros Serpiente",
    category: 'Aros',
    price: randomPrice(200, 250),
    img: aros_serpiente,
    stock: 5
  },
  {
    id: "6",
    name: "Pulseras Coronas",
    category: 'Pulseras',
    price: randomPrice(200, 250),
    img: pulseras_coronas,
    stock: 5
  },
  {
    id: "7",
    name: "Pulseras Perlas",
    category: 'Pulseras',
    price: randomPrice(200, 250),
    img: pulseras_perlas,
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