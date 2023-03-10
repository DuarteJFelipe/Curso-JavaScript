
const navegacion = document.querySelector(".navegacion");

console.log(navegacion.firstElementChild);// el primer hermano
console.log(navegacion.lastElementChild);// el ultimo hermano

console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos
console.log(navegacion.children);   // no toma encuenta espacios en blanco, solo el codigo html



console.log(navegacion.children[0].nodeName); 
console.log(navegacion.children[0].nodeType); 

console.log("-------------------------------------");

const card = document.querySelector(".card");
card.children[1].children[1].textContent = "Nuevo heading desde travesing the dom";
console.log(card.children[1].children[1].textContent); // traversing the dom

console.log("-------------------------------------");

const imagen = document.querySelector(".card");
imagen.children[0].src = "img/hacer3.jpg"


// Traversing the Hijo al padre
console.log(card.parentNode);   // Toman en cuenta espacios en blanco
console.log(card.parentElement.parentElement);    // mas seguro ya que no toma espacios en blanco


// Traversing the hermano a hermano
console.log(card.nextElementSibling.nextElementSibling);


const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard.previousElementSibling); // se regresa un elemento hermano