
//  Spread operator

const carrito = [];

// Definir productos
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 180
}

//  Forma Declarativa

let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3 ,...resultado];

console.table(resultado);
