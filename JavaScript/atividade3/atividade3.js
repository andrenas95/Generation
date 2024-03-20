//Elabore um algoritmo em JavaScript, que leia o Salário Bruto, o Adicional Noturno, 
//as Horas Extras e os Descontos de um Colaborador, em variáveis do tipo float e exiba na tela o Salário Líquido. Veja o exemplo abaixo:

const leia = require('readline-sync')

let salario_bruto,Adicional_noturno,Horas_Extras,Descontos,salario_liquido;

salario_bruto = leia.questionFloat("Digite o Salario Bruto : ");
Adicional_noturno = leia.questionFloat("Digite o Adicional Noturno : ");
Horas_Extras = leia.questionFloat("Digite as Horas Extras : ");
Descontos = leia.questionFloat("Digite os Descontos : ");

//Calculo do salário
salario_liquido = (salario_bruto + Adicional_noturno + (Horas_Extras * 5) - Descontos)    
console.log('O seu Novo salário agora é R$' + salario_liquido)