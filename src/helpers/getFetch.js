const randomPrice = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const productos = [{
    id: "1",
    name: "Aros Rostro",
    category: 'aros',
    price: 250,
    img: "../../assets/img/aros_cara.jpeg",
    stock: 5,
    detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis pariatur tenetur odit ut modi, autem quo? Quo amet repellendus voluptates perspiciatis itaque reprehenderit, voluptas officia atque voluptatem consequuntur, sed blanditiis dolores? Nulla minus eum aut voluptatum. Totam sit error dignissimos voluptas veritatis beatae, fuga harum maxime quia autem. Velit!"
  },
  {
    id: "2",
    name: "Aros Flores",
    category: 'aros',
    price: 225,
    img: "../../assets/img/aros_flores.jpeg",
    stock: 5,
    detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis pariatur tenetur odit ut modi, autem quo? Quo amet repellendus voluptates perspiciatis itaque reprehenderit, voluptas officia atque voluptatem consequuntur, sed blanditiis dolores? Nulla minus eum aut voluptatum. Totam sit error dignissimos voluptas veritatis beatae, fuga harum maxime quia autem. Velit!"
  },
  {
    id: "3",
    name: "Aros Planetas",
    category: 'aros',
    price: 225,
    img: "../../assets/img/aros_planetas.jpeg",
    stock: 5,
    detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis pariatur tenetur odit ut modi, autem quo? Quo amet repellendus voluptates perspiciatis itaque reprehenderit, voluptas officia atque voluptatem consequuntur, sed blanditiis dolores? Nulla minus eum aut voluptatum. Totam sit error dignissimos voluptas veritatis beatae, fuga harum maxime quia autem. Velit!"
  },
  {
    id: "4",
    name: "Aros Rayos",
    category: 'aros',
    price: 225,
    img: "../../assets/img/aros_rayos.jpeg",
    stock: 5,
    detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis pariatur tenetur odit ut modi, autem quo? Quo amet repellendus voluptates perspiciatis itaque reprehenderit, voluptas officia atque voluptatem consequuntur, sed blanditiis dolores? Nulla minus eum aut voluptatum. Totam sit error dignissimos voluptas veritatis beatae, fuga harum maxime quia autem. Velit!"
  },
  {
    id: "5",
    name: "Aros Serpiente",
    category: 'aros',
    price: 250,
    img: "../../assets/img/aros_serpientes.jpeg",
    stock: 5,
    detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis pariatur tenetur odit ut modi, autem quo? Quo amet repellendus voluptates perspiciatis itaque reprehenderit, voluptas officia atque voluptatem consequuntur, sed blanditiis dolores? Nulla minus eum aut voluptatum. Totam sit error dignissimos voluptas veritatis beatae, fuga harum maxime quia autem. Velit!"
  },
  {
    id: "6",
    name: "Pulseras Coronas",
    category: 'pulseras',
    price: 350,
    img: "../../assets/img/pulseras_coronas.jpeg",
    stock: 5,
    detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis pariatur tenetur odit ut modi, autem quo? Quo amet repellendus voluptates perspiciatis itaque reprehenderit, voluptas officia atque voluptatem consequuntur, sed blanditiis dolores? Nulla minus eum aut voluptatum. Totam sit error dignissimos voluptas veritatis beatae, fuga harum maxime quia autem. Velit!"
  },
  {
    id: "7",
    name: "Pulseras Perlas",
    category: 'pulseras',
    price: 300,
    img: "../../assets/img/pulseras_perlas.jpeg",
    stock: 5,
    detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis pariatur tenetur odit ut modi, autem quo? Quo amet repellendus voluptates perspiciatis itaque reprehenderit, voluptas officia atque voluptatem consequuntur, sed blanditiis dolores? Nulla minus eum aut voluptatum. Totam sit error dignissimos voluptas veritatis beatae, fuga harum maxime quia autem. Velit!"
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