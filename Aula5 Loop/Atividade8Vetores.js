console.log('=======================')
console.log('         VETORES       ')
console.log('=======================')

const readline = require('readline-sync');

const array = [], arrayOdd = [], arrayEven = [];
let somatotal = 0, media = 0;

do {
    let num = readline.questionInt("Digite o numero que deseja guardar: ");

    array.push(num);

} while (array.length < 10);

for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
        arrayOdd.push(array[i]);
    }

    if (array[i] % 2 === 0) {
        arrayEven.push(array[i]);
    }

    somatotal += array[i];

}

media = somatotal/ (array.length);

console.log(`Elementos nos índices ímpares:
${arrayOdd}
Elementos pares:
${arrayEven}
Soma: ${somatotal}
Média: ${media}
`)
