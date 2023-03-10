
//  Ejercicio Fizz Buzz - 100 numeros

// 3 6 9 12 .... Fizz
// 5 10 15 20 .... Buzz
// 15 30 45 .... Fizz Buzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FIZZBUZZ`);
    }else
    if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    }else
    if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    }else {
        console.log(i);
    }
}

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} Fizz Buzz`);
//         continue;
//     }else if (i % 3 === 0) {
//         console.log(`${i} Fizz`);
//         continue;
//     }else if (i % 5 === 0) {
//         console.log(`${i} Buzz`);
//         continue;
//     }
//     console.log(`${i}`);
// }
