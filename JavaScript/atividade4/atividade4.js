//Leia quatro valores float (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do 
//produto entre o n1 e n2 pelo produto entre o n3 e o n4. Veja os exemplos abaixo:

const leia = require('readline-sync')

let n1,n2,n3,n4,diferenca;

n1 = leia.questionFloat("Digite o primeiro numero : ");
n2 = leia.questionFloat("Digite o segundo numero : ");
n3 = leia.questionFloat("Digite o terceiro numero : ");
n4 = leia.questionFloat("Digite o quarto numero : ");

diferenca = (n1*n2) - (n3*n4);

(console.log)("znA diferença dos numeros 1e2 para 3e4 é: " + diferenca);