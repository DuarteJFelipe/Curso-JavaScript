
const carrito = [           // Arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 450 },
    { nombre: 'Celular', precio: 700 },
];

let resultado;

resultado = carrito.filter((producto)=>{    // Crea un nuevo arreglo con los resultados 
    return producto.precio > 400;
});

resultado2 = carrito.filter(producto => producto.precio < 600); // Crea un nuevo arreglo con los resultados 
  

resultado = carrito.filter(producto => producto.nombre !== "Audifonos"); // crea un arreglo con todos los productos exceptos el que tenga como nombre Audifonos

console.log(resultado);
