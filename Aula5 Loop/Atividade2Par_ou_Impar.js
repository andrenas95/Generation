console.log('=======================')
console.log('      PAR OU IMPAR     ')
console.log('=======================')

const readline = require('readline-sync');

let contpar = 0, contImpar = 0;

 for (let n = 1; n <=10; n++) {
    let num = readline.questionInt(`Digite o ${n} numero: `);
    
 if ((num %2) == 0) {
    contpar ++;
 }
 else {
    contImpar ++;
 }    

}
console.log(`\nTotal de numeros pares e: ${contpar}`);
console.log(`\nTotal de numeros impares e: ${contImpar}`);