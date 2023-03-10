
const aprendiendo = function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo("React");


// Arrow Functions

const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;   // cuando solo es una linea el return es implicito y no es necesario poner llaves y si solo es un parametro no son necesarios los parentesis

console.log(aprendiendo2("JavaScript"));