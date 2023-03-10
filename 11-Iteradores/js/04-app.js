
let i = 1;  //  Inicializar el while

while (i < 100) {    // Condicion /Mientras i sea menor a 100 HAGA LO QUE ESTA DENTRO DE CORCHETES
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} Fizz Buzz`);
        i++;       
    }else if (i % 3 === 0) {
        console.log(`${i} Fizz`); 
        i++;       
    }else if (i % 5 === 0) {
        console.log(`${i} Buzz`);      
        i++;         
    }
    console.log(`${i}`);
    i++;
}

let t = 1; 

console.log(`----------------------------`);

while (t < 100) {
    if (t % 2 === 0) {
        console.log(`El numero ${t} es PAR`);
    }else{
        console.log(`El numero ${t} es IMPAR`);
    }

    t++;
}






