  
const efectivo = 200;
const credito = 500;
const disponible = efectivo + credito;
const totalPagar = 600;

// Operador OR  ||

if(efectivo >= totalPagar || credito >= totalPagar || disponible >= totalPagar){  
    console.log("Compra realizada");
}else{
    console.log("Error: Fondos insuficientes");
}