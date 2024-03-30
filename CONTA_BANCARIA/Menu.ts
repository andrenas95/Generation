import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { Conta } from "./src/model/Conta"
import { ContaCorrente } from "./src/model/ContaCorrente";

export function main() {

    let opcao: number;
    let c1: Conta = new Conta(1, 123, 1, "Natasha", 1000000);
    c1.visualizar();
    // // Modificando o meu saldo
    // c1.set_saldo(15000000);
    // // Recuperando o meu saldo
    // console.log(c1.get_saldo());

    c1.sacar(200000);

    c1.visualizar();

    c1.depositar(5000);

    c1.visualizar();

    // let c2: Conta = new Conta(2, 123, 1, "André Luiz", 1000000);
    // c2.visualizar();
    // let c3: Conta = new Conta(3, 123, 1, "Rafael", 1000000);
    // c3.visualizar();
    // let c4: Conta = new Conta(4, 123, 1, "Francisca", 1000000);
    // c4.visualizar();

    // Depositar dinheiro na Conta
    console.log("n\Depositar R$ 5000.00 na Conta: ");
    c1.depositar(5000);
    c1.visualizar();

    const cc1: ContaCorrente = new ContaCorrente(2, 456, 1, "Yasmine Lamark", 500000, 1000);
    cc1.visualizar();
    
    cc1.sacar(1000);

    cc1.visualizar();

    cc1.depositar(5000);

    cc1.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.white, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DAS AMÉRICAS                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, 
                "\nBanco das Américas - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, 
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, 
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: André Luiz Nascimento Pinto");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*******************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();