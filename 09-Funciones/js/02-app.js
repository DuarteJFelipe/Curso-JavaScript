
// Declaracion de funcion (funtion declaration)
sumar();              // Si funciona cuando se llama antes de crear la funcion
function sumar() {
    console.log(2 + 2);
}




// Expresion de funcion (funtion Expression)
sumar2();              // No funciona  si se llama antes de crear la funcion
const sumar2 = function () {
    console.log(3 + 3);
}

// funcion lambda
const sumarLambda = () => {
    console.log(4 + 4);
}


