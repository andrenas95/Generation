import readlinesync = require("readline-sync");
import { colors } from "./src/util/Cores";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupança } from "./src/model/ContaPoupança";
import { ContaController } from "./src/Controller/ContaController";


export function main() {   

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoConta = ['Conta Corrente', 'Conta Poupanca'];

    //Instancia da Classe ContaController
    const Conta: ContaController = new ContaController();

    //Instancia da Classe Conta Corrente
    //Adiciona na Colletion ListaCntas
    const contaCorrente: ContaCorrente = new ContaCorrente(Conta.gerarNumero(), 456, 1, "Yasmine Lamark", 500000, 1000)
    Conta.cadastrar(contaCorrente);

    // Instância da da Classe ContaPoupanca
    // Adicionada na Collection listaContas
    const contaPoupança: ContaPoupança = new ContaPoupança(Conta.gerarNumero(), 123, 2, "Victor", 1000, 10);
    Conta.cadastrar(contaPoupança);

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
                "\nBanco das Américas - A sua História começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);

                console.log("Digite o Número da Agencia: ")
                agencia = readlinesync.questionInt("")
                
                console.log("Digite o Nome do Titular: ")
                titular = readlinesync.question("")

                console.log("Informe o tipo da Conta:")
                tipo =  readlinesync.keyInSelect(tipoConta, "", {cancel: false}) + 1

                console.log("Digite o Saldo da Conta: ")
                saldo = readlinesync.questionFloat("")

                switch(tipo){
                    case 1:
                        console.log("Digite o Limite da Conta: ")
                        limite = readlinesync.questionFloat("")    
                        Conta.cadastrar(
                            new ContaCorrente(Conta.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                        break;
                    case 2:
                        console.log("Digite o dia do aniverário da Conta: ")
                        aniversario = readlinesync.questionFloat("")    
                        Conta.cadastrar(
                           new ContaPoupança(Conta.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;    
                }
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);

                // Chamada do Método listarTodas() da Classe ContaController
                Conta.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                    console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                Conta.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                    console.log(colors.fg.whitestrong,
                        "\n\nAtualizar dados da Conta\n\n", colors.reset);
    
                    console.log("Digite o Número da Conta: ")
                    numero = readlinesync.questionInt("")
    
                    let contas = Conta.buscarNoArray(numero)
    
                    if (contas !== null) {
    
                        console.log("Digite o Número da Agência: ")
                        agencia = readlinesync.questionInt("")
    
                        console.log("Digite o Nome do Titular: ")
                        titular = readlinesync.question("")
    
                        tipo = contas.tipo
    
                        console.log("Digite o Saldo da Conta: ")
                        saldo = readlinesync.questionFloat("")

                        switch (tipo) {
                            case 1:
                                console.log("Digite o Limite da Conta: ")
                                limite = readlinesync.questionFloat("")
                                Conta.atualizar(
                                    new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                                )
                                break;
                            case 2:
                                console.log("Digite o dia do aniversário da Conta: ")
                                aniversario = readlinesync.questionInt("")
                                Conta.atualizar(
                                    new ContaPoupança(numero, agencia, tipo, titular, saldo, aniversario)
                                )
                                break;
                        }
    
                        }else {
                            console.log("A Conta não foi Encontrada!")
                        }
    
                        keyPress()
                        break;        
                        case 5:
                            console.log(colors.fg.whitestrong,
                                "\n\nApagar uma Conta\n\n", colors.reset);
            
                            console.log("Digite o Número da Conta: ")
                            numero = readlinesync.questionInt("")
            
                            Conta.deletar(numero);
            
                            keyPress()
                            break;
                        case 6:
                            console.log(colors.fg.whitestrong,
                                "\n\nSaque\n\n", colors.reset);

                            console.log("Digite o Número da Conta: ")
                            numero = readlinesync.questionInt("")

                            console.log("Digite o Saldo da Conta: ")
                            valor = readlinesync.questionFloat("")

                            Conta.sacar (numero, valor);


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
    console.log("Generation Brasil - andrenas.nascimento95@gmail.com");
    console.log("https://github.com/andrenas95/Generation/tree/classe_conta");
    console.log("*******************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();