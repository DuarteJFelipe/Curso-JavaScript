
const carrito = [           // Arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 450 },
    { nombre: 'Celular', precio: 700 },
];

// Con un foreach
let resultado = "";
carrito.forEach((producto, index) => {
    if (producto.nombre === "Tablet" ) {
        resultado = carrito[index];
    }
});
console.log(resultado);


// Con un .find
const resultado2 = carrito.find ((producto)=>{  // Solo retorna el primer elemento que cumpla con la condicion
    return producto.nombre === "Tablet";
});
console.log(resultado2);