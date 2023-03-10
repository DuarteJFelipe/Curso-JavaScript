
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit",validarFormulario);


function validarFormulario(e){
    e.preventDefault(); // detiene la accion que realiza el elemento por default = en este caso evita que nos envie a /buscador

    console.log(e.target.action);
}
