
const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector("#footer"); 

// recibe 2 argumentos: 1: evento  2: accion o el nombre de una funcion
btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter(){
    if(footer.classList.contains("activo")){
        footer.classList.remove("activo");
        this.classList.remove("activo");    // Como es un evento del btnFlotante entonces this = btnFlotante
        this.textContent = "Idioma y Moneda";
    }else{
        footer.classList.add("activo");
        this.classList.add("activo");  // Como es un evento del btnFlotante entonces this = btnFlotante
        this.textContent = "X Cerrar";
    }

}


