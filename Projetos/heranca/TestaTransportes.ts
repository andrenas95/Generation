import {Transporte } from "./Transporte";

let t1: Transporte = new Transporte(5);

t1.capacidade = 4;

console.log(`A capacidade do meio de Transporte é:  ${t1.capacidade}`);

let ter1: Terrestre = new Terrestre(5, 4, 200);

ter1.visualizar();
