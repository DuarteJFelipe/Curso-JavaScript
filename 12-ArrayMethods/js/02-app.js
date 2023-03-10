const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; // Arreglo de indices

const carrito = [           // Arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Conocer el indice de Abril
const indice = meses.findIndex((mes) => {
    return mes === "Abril";
});
console.log(indice);    // Si lo buscado no existe retornara un -1

// if (indice > 0) {    
// }


// Conocer el indice de Teclado en un arreglo de objetos
const indice2 = carrito.findIndex((producto) => {
    return producto.nombre === "Teclado";
});
console.log(indice2);

// arrow funcion
const indice2arrow = carrito.findIndex(producto => producto.nombre === "Teclado");
console.log(indice2arrow);