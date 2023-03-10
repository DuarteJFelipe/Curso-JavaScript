
// Unir  Objetos
const producto = {
    nombre: " Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medidas: "1m"
}

// Forma antigua
const resultado = Object.assign(producto, medidas);

console.log(resultado);



// Otra forma - Spead Operator o Rest Operator
const resultado2 = { ...producto, ...medidas }      // Mas comun

console.log(resultado2);