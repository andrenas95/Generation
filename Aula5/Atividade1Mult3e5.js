//Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), 
//via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos 
//e o total de pessoas cuja idade seja maior que 50 anos. 
//A leitura dos dados deve ser finalizada ao digitar uma idade negativa. Veja o exemplo abaixo:
const leia = require('readline-sync');
console.log('=======================')
console.log('   MULTIPLO DE 3 E 5   ')
console.log('=======================')

let n1, n2, x;
		
n1 = leia.questionInt("\n Digite o primeiro numero do intervalo: ");

n2 = leia.questionInt("\n Digite o ultimo numero do intervalo:  ");

if (n1>n2){
    
    console.log("\nIntervalo invalido");
    
} else {
    for(x=n1;x<=n2;x++) {
        
        if (x % 3 == 0 && x % 5 == 0){
            
            console.log("\n" + x + " E multiplo de 3 e 5");
            
        }

    }

}
