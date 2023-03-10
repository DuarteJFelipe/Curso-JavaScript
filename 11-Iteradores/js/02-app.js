

//  Break - Corta la ejecucion de un loop

//  Continue - Nos permite interceptar un elemento, identificarlo y continuar la ejecucion

for (let i = 0; i <= 10; i++) {      
    if (i === 5) {
        console.log(`Este es el ${i}`);
        break;  // Termina el if (Detiene la ejecucion)
    }
    console.log(`Numero: ${i}`);
}

for (let i = 0; i <= 10; i++) {      
    if (i === 5) {
        console.log(`CINCO`);
        continue;   // reinicia el loop "asi evitamos que se imprima el cinco 2 veces"
    }
    console.log(`Numero: ${i}`);
}

console.log(`----------------------------------------------------`);

const carrito = [
    { nombre: 'Monitor 27 Pulgadas',precio: 500},
    { nombre: 'Television',precio: 100, descuento: true },
    { nombre: 'Tablet',precio: 200},
    { nombre: 'Audifonos',precio: 300},
    { nombre: 'Teclado',precio: 400},
    { nombre: 'Celular',precio: 700},
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El producto: ${carrito[i].nombre} tiene descuento!! no pierdas esta oferta.`);
        continue;
    }
    console.log(carrito[i].nombre);    
}