//5)	Com base na tabela abaixo, escreva um algoritmo em JavaScript que leia o código de um item 
//(número inteiro de 1 a 6) e a quantidade comprada deste item (número inteiro). 
//A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

const leia = require('readline-sync');
console.log('=======================')
console.log('Lanchonete_do_Andrenas')
console.log('=======================')

var produto;
var quantidade;

console.log(" Escolha uma Opção 1 a 6 =========")
console.log(" 1-- Cachorro Quente =====R$ 10,00");
console.log(" 2-- X-Salada ========== R$ 15,00")
console.log(" 3-- X-Bacon =========== R$ 18,00");
console.log(" 4-- Bauru ============= R$ 12,00 ");
console.log(" 5-- Refrigerante ======= R$ 8,00");
console.log(" 6-- Suco de laranja ==== R$ 13,00 ");
console.log("======================================")
produto = leia.questionInt("\nDigite o Codigo do Produto abaixo: ")

quantidade= leia.questionInt("\ndigite a quantidade comprada:  ");

switch (produto){ // if ( codigo == 3)
case 1 :
      console.log("\n o seu cachorro quente custará R$" + (10.00*quantidade)); 
    break;
    case 2 :
      console.log("\n o seu X-Salada custará R$" +(15.00*quantidade));
    break;
    case 3 :
        console.log("\n o seu X-Bacon custará R$" +(18.00*quantidade));
      break;
      case 4 :
        console.log("\n o seu Bauru custará R$" +(12.00*quantidade));
      break;
      case 5 :
        console.log("\n o seu Refrigerante custará R$" +(8.00*quantidade));
      break;
      case 6 :
        console.log("\n o seu Suco de Laranja custará R$" +(13.00*quantidade));
      break;
     default:
    console.log("\nDgite um codigo valido!");     

}
