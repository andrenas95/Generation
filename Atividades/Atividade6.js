const leia = require('readline-sync');
let quantidade;

console.log("Escolha uma opção de 1 a 6:");
console.log("1. Cachorro quente.");
console.log("2. X-Salada.");
console.log("3. X-Bacon.");
console.log("4. Bauru.");
console.log("5. Refrigerante.");
console.log("6. Suco de Laranja.");

const escolha = leia.questionInt("Digite o numero da opcao: ");

switch (escolha) {
    case 1:
        quantidade = leia.question("Digite quantos itens deseja: ");
        console.log(`Você escolheu ${quantidade} Cachorro quente e o valor total foi de R$${quantidade * 10.00}`);
        break;
    case 2:
        quantidade = leia.question("Digite quantos itens deseja: ");
        console.log(`Você escolheu ${quantidade} X-Salada e o valor total foi de R$${quantidade * 15.00}`);
        break;
    case 3:
        quantidade = leia.question("Digite quantos itens deseja: ");
        console.log(`Você escolheu ${quantidade} X-Bacon e o valor total foi de R$${quantidade * 18.00}`);
        break;
    case 4:
        quantidade = leia.question("Digite quantos itens deseja: ");
        console.log(`Você escolheu ${quantidade} Bauru e o valor total foi de R$${quantidade * 12.00}`);
        break;
    case 5:
        quantidade = leia.question("Digite quantos itens deseja: ");
        console.log(`Você escolheu ${quantidade} Refrigerante e o valor total foi de R$${quantidade * 8.00}`);
        break;
    case 6:
        quantidade = leia.question("Digite quantos itens deseja: ");
        console.log(`Você escolheu ${quantidade} Suco de Laranja e o valor total foi de R$${quantidade * 13.00}`);
        break;
    default:
        console.log("Opção inválida");
}
