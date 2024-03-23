console.log('=======================')
console.log('        VETORES        ')
console.log('=======================')


const readline = require('readline-sync');

const array = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const num = readline.questionInt('Digite o numero que voce deseja encontar: ');

for (let x = 0; x <= array.length; x++) {
    if (array[x] === num) {
        console.log(`O Número ${num} está localizado na posição: ${x}`)
    } else if (x === array.length) {
        console.log(`O número ${num} não foi encontrado!`)
    }
}