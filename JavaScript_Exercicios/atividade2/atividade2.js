//Elabore um algoritmo em Java que leia 4 notas de um participante, em variáveis 
//do tipo float e exiba na tela a média final do participante. Veja o exemplo abaixo:


const leia = require('readline-sync')

let nota1,nota2,nota3,nota4,media;

nota1 = leia.questionFloat("Digite o primeiro numero : ");
nota2 = leia.questionFloat("Digite o segundo numero : ");
nota3 = leia.questionFloat("Digite o terceiro numero : ");
nota4 = leia.questionFloat("Digite o quarto numero : ");

//Calculo da media
media = (nota1 + nota2+ nota3 + nota4) / 4
    
console.log("Média: " + media)