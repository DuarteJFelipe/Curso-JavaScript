
const carrito = [           // Arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 450 },
    { nombre: 'Celular', precio: 700 },

];


const resultado = carrito.every((producto)=>{   // Todos los objetos deben cumplir la condicion para que retorne un true
    return producto.precio < 1000;
});
console.log(resultado);