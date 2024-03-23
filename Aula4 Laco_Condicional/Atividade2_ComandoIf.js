//2)Escreva um algoritmo em JavaScript, que leia um número inteiro via teclado e 
//mostre na tela uma mensagem indicando se este número é par ou ímpar e
// se o número é positivo ou negativo. Veja os exemplos abaixo:

const leia = require('readline-sync');
const num = leia.questionInt("\nDigite o numero : ");

if(num > 0){ // comando Positivo ou Negativo
    console.log("\"O numero", num, "É Positivo");  
}else{
    console.log("\"O numero", num, "É Negativo");
}
if(num % 2 == 0){   // comando PAR ou IMPAR
    console.log("\"O numero", num, "É PAR");
}else{
   console.log("\O numero", num, "É IMPAR");


}
console.log('==============================')




