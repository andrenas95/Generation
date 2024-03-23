const leia = require('readline-sync');
console.log('=======================')
console.log('       IDADE           ')
console.log('=======================')

		let idade=0, menor=0, maior=0;
				
		idade = leia.questionInt("\n Digite uma idade: ");
		
		while (idade>=0) {	
			if (idade < 21){ 
				
				menor ++;	
			} 
			
			if (idade > 50){
				
				maior ++;	
			}
			
			idade = leia.questionInt("\n Digite a idade: ");
					
		} 
		
        console.log("Total de pessoas menores de 21 anos: "+menor);
        console.log("Total de pessoas maiores de 50 anos: "+maior);