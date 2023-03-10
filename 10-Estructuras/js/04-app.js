
const dinero = 600;
const totalAPagar = 500;
const tarjeta = false;


if (!tarjeta) {
    console.log("Error: Debe poseer una tarjeta");
}else if (dinero >= totalAPagar){
    console.log("Compra Realizada");
}else{
    console.log("Error: saldo insuficiente");
}





