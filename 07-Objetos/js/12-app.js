
// Object literal
const producto = {
    nombre: " Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Xbox One","420");
console.log(producto2);

const producto3 = new Producto("Play Station 3","120");
console.log(producto3);