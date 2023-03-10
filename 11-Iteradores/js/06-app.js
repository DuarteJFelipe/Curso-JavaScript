
// forEach (array.method)

const pendientes = ["Tarea","Comer","Proyecto","Estudiar"];

// pendientes.forEach( (pendiente) => console.log(pendiente));

pendientes.forEach((pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
});

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Television", precio: 400 },
    { nombre: "Celular", precio: 800 },
    { nombre: "Audifonos", precio: 120 },
    { nombre: "Teclado", precio:  220},
]

carrito.forEach((producto) => {
    console.log(producto.nombre);
});

const nuevoArreglo = carrito.map((producto) => producto.nombre);

console.log(nuevoArreglo);