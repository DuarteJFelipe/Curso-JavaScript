const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; // Arreglo de indices

const carrito = [           // Arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo
const resultado = meses.includes("Enero");
console.log(resultado);

const existe2 = meses.some(( mes)=>{
    return mes === "Marzo"
});
console.log(existe2);


// En un arreglos de objetos se utiliza .some
const existe = carrito.some(( producto)=>{
    return producto.nombre === "Celular"
});
console.log(existe);