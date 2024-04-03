const readline = require("readline-sync"); 

import {Stack} from "./Stack";

const pilha = new Stack<string>(); 

let OPCAO: number; 

do{
        console.log("*******************************************");
        console.log("                                           ");
        console.log("         1- ADICIONA O LIVRO NA PILHA      ");
        console.log("         2- LISTAR TODOS OS LIVROS         ");
        console.log("         3- RETIRAR LIVRO DA PILHA         ");
        console.log("         0- SAIR                           ");
        console.log("                                           ");
        console.log("*******************************************");

        OPCAO = readline.questionInt("\nENTRE COM A OPCAO DESEJADA: ")

        switch(OPCAO){
            case 1: 
                    const nome = readline.question("\nDIGITE O NOME: "); 

                    pilha.push(nome);

                    console.log("\nPILHA:\n");

                    pilha.printStack();

                    console.log("\nLIVRO ADICIONADO!");

                    break;
            case 2: 
                    if(pilha.isEmpty())
                            console.log("\nA PILHA ESTA VAZIA!");
                    else{
                            console.log("\nLISTA DE LIVROS NA PILHA:\n")

                            pilha.printStack();
                    }
                    break;
            case 3: 
                    if(pilha.isEmpty())
                            console.log("\nA PILHA ESTA VAZIA !\n");
                    else{
                            console.log("\nPILHA:\n");

                            pilha.pop(); 

                            pilha.printStack(); 

                            console.log("\nO LIVRO FOI RETIRADO DA PILHA!\n");

                    }
                    break;
            case 0: 
                    console.log("\nPROGRAMA FINALIZADO!");
                    break;
            default:
                    console.log("\nDIGITE UMA OPCAO VALIDA! ")

    }

}
while(OPCAO !== 0);