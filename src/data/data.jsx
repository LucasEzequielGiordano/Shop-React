function randomPrice(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const products = [
  {
    id: 1,
    nombre: "Aros Rostro",
    precio: randomPrice(200, 250),
    img: "../img/aros_cara.jpeg",
    stock: Math.floor(Math.random() * 11),
  },
  {
    id: 2,
    nombre: "Aros Flores",
    precio: randomPrice(200, 250),
    img: "../img/aros_flores.jpeg",
    stock: Math.floor(Math.random() * 11),
  },
  {
    id: 3,
    nombre: "Aros Planetas",
    precio: randomPrice(200, 250),
    img: "../img/aros_planetas.jpeg",
    stock: Math.floor(Math.random() * 11),
  },
  {
    id: 4,
    nombre: "Aros Rayos",
    precio: randomPrice(200, 250),
    img: "../img/aros_rayos.jpeg",
    stock: Math.floor(Math.random() * 11),
  },
];
console.log(products);
