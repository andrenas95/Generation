const leia = require ('readline-sync')

function salario(){
    const salario   = leia.questionFloat('Digite o valor do seu salario:');
    console.log("O salário é: " + salario);
    const abono  = leia.questionFloat('Digite o valor do seu abono:');
    console.log("O seu abono é:" + abono);
    
    console.log('O seu Novo salário agora é R$' ) 
     
    console.log(salario + abono)
    
        
    }

    salario()
