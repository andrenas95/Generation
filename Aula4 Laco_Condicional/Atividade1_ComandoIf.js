//Faça um algoritmo em Java que leia 3 valores inteiros A, B e C e
// imprima na tela se a soma de A + B é maior, menor ou igual a C.

const leia = require('readline-sync');

let A,B,C,soma;

A = leia.questionInt("\nDigite o numero A: ");
B = leia.questionInt("\nDigite o numero B: ");
C = leia.questionInt("\nDigite o numero C: ");

soma = A + B

  if(soma > C ){
    console.log("\nA soma de A + B é Maior que C.");  
}else if(soma < C ){
    console.log("\nA soma de A + B é Menor do que C.");
}else{
    console.log("\nA soma de A e B é igual a C.");
}

