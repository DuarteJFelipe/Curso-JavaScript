
const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Television", precio: 400 },
    { nombre: "Celular", precio: 800 },
    { nombre: "Audifonos", precio: 120 },
    { nombre: "Teclado", precio:  220},
]

for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio }`);
}

console.log("-----------------------------------");

// Array metod
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio }`);
});



