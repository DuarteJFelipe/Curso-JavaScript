
// Favorito

const carrito = [           // Arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con un foreach
let total = 0;
carrito.forEach((producto) =>  {    // Muestra el total de carrito
    total += producto.precio;
});
console.log(`El total a pagar es de: $${total}`);


// Con un reduce
let resultado = carrito.reduce((total, producto) => {
    return total + producto.precio;
} , 0 /* valor inicial */);
console.log(`El total a pagar es de: $${resultado}`);