
const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Television", precio: 400 },
    { nombre: "Celular", precio: 800 },
    { nombre: "Audifonos", precio: 120 },
    { nombre: "Teclado", precio:  220},
]


// Array metod
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio }`);
});


carrito.map( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio }`);
});



// map crea un nuevo arreglo y forEach no
const nuevoArreglo = carrito.map( function(producto) {
   return `${producto.nombre} - Precio: ${producto.precio }`;
});

console.log(nuevoArreglo);








