const leia = require('readline-sync');

let num;

num = leia.question("\nDigite um numero: ");

for(contador = 1; contador <= 10;  contador++){
   console.log(num+" x " + contador + " = ",(num * contador));
   
}       