
// Variables
const btnEnviar = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const formulario = document.querySelector("#enviar-mail");

// Variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");


eventListeners();
function eventListeners() {
    // Cuando la app arranca
    document.addEventListener("DOMContentLoaded",iniciarApp);

    // Campos del formulario
    email.addEventListener("blur",validarFormulario);
    asunto.addEventListener("blur",validarFormulario);
    mensaje.addEventListener("blur",validarFormulario);

    // Enviar email
    btnEnviar.addEventListener("click",enviarEmail);

    // Reinicia el formulario
    btnReset.addEventListener("click",resetearFormulario);
}



// Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed","opacity-50");
}

// Validando el formulario
function validarFormulario(e) {
const er = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; // Expresion regular

    if (e.target.value.length > 0) {
        // Elimina los errores...
        const error = document.querySelector("p.error");
        if(error !== null){
             error.remove()
        };

        e.target.classList.remove("border", "border-red-500");
        e.target.classList.add("border", "border-green-500");
    }else{
        e.target.classList.remove("border","border-green-500");
        e.target.classList.add("border", "border-red-500");


        mostrarError("Todos los campos son obligatorios");
    }


    if (e.target.type === "email") {
        // const er = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; // Expresion regular

        if (er.test(e.target.value)) {
            // Elimina los errores...
            const error = document.querySelector("p.error");    // primer p con clase error
            if(error !== null){
                error.remove()
            };

            e.target.classList.remove("border", "border-red-500");
            e.target.classList.add("border", "border-green-500");

        }else{
            e.target.classList.remove("border","border-green-500");
            e.target.classList.add("border", "border-red-500");
            mostrarError("El email no es valido");
        }
    }

// if(e.target.type==='email'){
//     if (er.test(email.value)) {
//esto igual funciona bien entonces no hay la neceisdad de usar el   if (er.test(e.target.value)) {
//la diferencia es que con e.target estas leyendo el valor que te da el evento blur que cambia dependiendo del input donde estemos escribiendo y el otro es el valor directo del email.
    if (er.test(email.value) === true && asunto.value !== "" && mensaje.value !== "" ) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove("cursor-not-allowed","opacity-50");
    }else{
        btnEnviar.disabled = true;
        btnEnviar.classList.add("cursor-not-allowed","opacity-50");
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement("p");
    mensajeError.textContent = mensaje;
    mensajeError.classList.add("border","border-red-500","background-red-100","text-red-500","p-3","mt-5","text-center",
    "error");

    const errores = document.querySelectorAll(".error");
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
}

// Envia el email
function enviarEmail(e) {
    e.preventDefault();

    // Mostrar el spinner
    const spinner = document.querySelector("#spinner");
    spinner.style.display = "flex";

    // Despues de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(() => {  // solo se ejecuta una vez a diferencia de setInterval()
        spinner.style.display = "none";

        // mensaje que dice que se envio correctamente
        const parrafo = document.createElement("p");
        parrafo.textContent = "El mensaje se envio correctamente";
        parrafo.classList.add("bg-green-500","p-4","my-10","text-center","font-bold","uppercase","text-white");

        // inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        // Eliminar el mensaje de exito
        setTimeout(() => {
            parrafo.remove();
            eliminarBordes(email,asunto,mensaje); 
            resetearFormulario();
        }, 5000);
    },3000);// 3 segundos
}

// Resetear formulario

function resetearFormulario() {
    formulario.reset();

    iniciarApp();
}

function eliminarBordes(input1, input2, input3) {
    const clases = 'border-green-500';
        input1.classList.remove(clases)
        input2.classList.remove(clases)
        input3.classList.remove(clases)
};
 
