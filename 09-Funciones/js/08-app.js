
//  Funciones que retornan un valor;

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 3);

console.log(resultado);


// Ejemplo avanzado

let total = 0;
function agregarCarrito(precio) {
    return total += precio; 
}
function calcularImpuesto(total) {
    return total * 1.15;    // 15%
}

total = agregarCarrito(400);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log(`SubTotal: $${total} 
Total: $${totalPagar}`);












