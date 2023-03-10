

// Switch case

const metodoPago = "efectivo";

switch (metodoPago) {
  case "efectivo":
        pagar();
    break;
  case "tarjeta":
        pagar();
    break;

  default:
        console.log("Elige un metodo de pago valido");
    break;
}


function pagar() {
    console.log(`Pagando con ${metodoPago}`);
}