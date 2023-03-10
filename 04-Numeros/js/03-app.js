
//===============================
//============ Math =============
//===============================

let resultado;

// PI
resultado = Math.PI;

// Redondear
resultado = Math.round(2.6);    // = 3
resultado = Math.round(2.4);    // = 2

// Redondear hacia arriba
resultado = Math.ceil(2.1);     // = 3  

// Redondear hacia abajo
resultado = Math.floor(2.9)     // = 2

// Raiz cuadrada
resultado = Math.sqrt(144);     // = 12

// Absoluto
resultado = Math.abs(-500);     // = 500

// Potencia
resultado = Math.pow(8,3);      // = 512

// Minimo
resultado = Math.min(3, 1, 5, -1, 7);       // = -1

// Maximo
resultado = Math.max(3, 1, 5, -1, 7);       // = 7

// Aleatorio
resultado = Math.random() * 20;

// dentro de un rango del  0 - 50
resultado = Math.floor(Math.random() * 50);

console.log(resultado);