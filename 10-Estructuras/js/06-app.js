  
const usuario = true;
const puedePagar = true;

// Operador AND &&

if(usuario && puedePagar){      //  Recuerda que el "= true" es implicito
    console.log("Confirmar");
}else if(!usuario && !puedePagar){
    console.log("Error: revisa si eres usuario y si cuentas con dinero en la cuenta");
}else if(!usuario){             // Recuerda que el " != true" es implicito
    console.log("Inicia Sesion o Crea una cuenta");
}else if(!puedePagar){
    console.log("Fondos insuficientes");
}

