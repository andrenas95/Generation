const leia = require('readline-sync');
console.log('=======================')
console.log('     DO WHILE - SOMA   ')
console.log('=======================')


        let numeropositivo = 0;
	
		do{
        var num = leia.questionInt("\n Digite um numero: ");

            if (num > 0 && num !== 0) {
                numeropositivo += num;
            }		
		
		}while(num != 0);
			
					
			console.log(`soma dos numeros positivos é: ${numeropositivo}`);

