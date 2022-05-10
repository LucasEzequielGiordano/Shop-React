import aros_cara from "../img/aros_cara.jpeg";
import aros_flores from "../img/aros_flores.jpeg";
import aros_planetas from "../img/aros_planetas.jpeg";
import aros_rayos from "../img/aros_rayos.jpeg";

function randomPrice(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const productos = [
  {
    id: 1,
    nombre: "Aros Rostro",
    precio: randomPrice(200, 250),
    img: aros_cara,
    stock: Math.floor(Math.random() * 11),
  },
  {
    id: 2,
    nombre: "Aros Flores",
    precio: randomPrice(200, 250),
    img: aros_flores,
    stock: Math.floor(Math.random() * 11),
  },
  {
    id: 3,
    nombre: "Aros Planetas",
    precio: randomPrice(200, 250),
    img: aros_planetas,
    stock: Math.floor(Math.random() * 11),
  },
  {
    id: 4,
    nombre: "Aros Rayos",
    precio: randomPrice(200, 250),
    img: aros_rayos,
    stock: Math.floor(Math.random() * 11),
  },
];
