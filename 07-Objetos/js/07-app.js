
const producto = {
    nombre: " Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Reescribir una propiedad de un objeto que no esta congelado
producto.disponible = false;

console.log(producto)