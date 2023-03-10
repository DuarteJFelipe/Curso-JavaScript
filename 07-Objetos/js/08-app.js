// Habilitar el modo estricto
"use strict";

const producto = {
    nombre: " Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto);    // Congela el objeto elegido, esto evita que el objeto pueda ser modificado

console.log(Object.isFrozen(producto));     // = True   