
for (let i = 0; i < 10; i++) {      //  Aumenta de 1 en 1
    console.log(`Numero: ${i}`);
}

console.log("---------------------------------------------------");

for (let i = 0; i < 10; i+=2) {     //  Aumenta de 2 en 2
    console.log(`Numero: ${i}`);
}

console.log("---------------------------------------------------");

for (let i = 1; i <= 20; i++) {
    if( i % 2 === 0){
        console.log(`El numero: ${i} es PAR`);
    }else{
        console.log(`El numero: ${i} es IMPAR`);
    }   
}

console.log("---------------------------------------------------");

const carrito = [
    { nombre: 'Monitor 27 Pulgadas',precio: 500},
    { nombre: 'Television',precio: 100},
    { nombre: 'Tablet',precio: 200},
    { nombre: 'Audifonos',precio: 300},
    { nombre: 'Teclado',precio: 400},
    { nombre: 'Celular',precio: 700},
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

















