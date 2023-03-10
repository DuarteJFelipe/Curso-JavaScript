
// Metodos de array

const carrito = [];

// Definir un producto
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

//  Forma Imperativa

// Agregar al final del arreglo
carrito.push(producto2);
carrito.push(producto);


// Agregar al principio del arreglo
carrito.unshift(producto3);

console.table(carrito);
