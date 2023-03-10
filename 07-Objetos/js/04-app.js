
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
// Forma antigua de asignar a una variable
// const nombre = producto.nombre;
// console.log(nombre);


// Nueva forma de extraer el precio del producto - Destructuring object
const {nombre, precio} = producto;

console.log(nombre);
console.log(precio);

