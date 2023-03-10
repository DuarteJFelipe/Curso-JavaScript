// Habilitar el modo estricto
"use strict";

const producto = {
    nombre: " Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto);    // A diferencia de Freeze, seal permite modificar las propiedades existentes pero no agregar o eliminar


producto.disponible = false;  // no deja

console.log(producto);