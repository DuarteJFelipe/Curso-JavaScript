

iniciarApp();   // siempre hay una funcion que inicia todo

function iniciarApp() {         // Encadenar funciones
    console.log("Iniciando app...");

    segundaFuncion();       // llama funcion desde una funcion
}

function segundaFuncion() {
    console.log("Desde la segunda funcion");

    usuarioAutenticado("Pablo");
}

function usuarioAutenticado(usuario) {
    console.log("Autenticando usuario... espere...");
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}