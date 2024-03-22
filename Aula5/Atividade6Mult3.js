const leia = require('readline-sync');
console.log('=======================')
console.log('       MULTIPLO DE     ')
console.log('=======================')

		let num = 0
		let total = 0
		let contador = 0
		var media
		
		do{
            num = leia.questionInt("\n Digite um numero: ");
			
			if (num %3 == 0 && num != 0){

			total += num;
			contador++;
	      }

		}while(num != 0);
			
			media =  (total / contador);
					
			console.log("A média de todos os números múltiplos de 3 é: ",media);

