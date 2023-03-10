
// Eliminar elementos del array

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

carrito.push(producto);
carrito.push(producto2);

carrito.unshift(producto3);



console.table(carrito);

// Eliminar ultimo elemento del arreglo
carrito.pop();
console.table(carrito);


// Eliminar primer elemento del arreglo
carrito.shift();
console.table(carrito);


// Eliminar cualquier elemento del arreglo
carrito.splice(1, 1); // (posicion, cantidad)
console.table(carrito);
