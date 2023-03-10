const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion: {
            pais: "China"
        }
    }
}

//  Destructuring de objetos anidados

const { informacion:{fabricacion} } = producto;

// console.log(informacion);   // ERROR porque no se ha creado la variable informacion, solo la entrada a fabricacion

console.log(fabricacion);

const { informacion:{fabricacion:{pais} } } = producto;

// console.log(fabricacion);  // ERROR porque no se ha creado la variable fabricacion, solo la entrada a pais

console.log(pais);
