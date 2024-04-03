import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transporte } from "./Transporte";


let t1: Transporte = new Transporte (5)

t1.capacidade = 4;

console.log(`A Capacidade do meio de Transporte é: ${t1.capacidade}`);

let ter1: Terrestre = new Terrestre(5, 4, 200);

ter1.visualizar();

let aut1: Automovel = new Automovel(5, 4, 250, "Rosa", 5, "FJW3567", 6);

aut1.visualizar();

aut1.calcularIpva(60000); 
