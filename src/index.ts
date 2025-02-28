import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";

import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";

const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMoto = new GerenciadorVeiculos<Moto>();

gerenciadorCarros.adicionar({
    modelo: "Civic",
    ano: 2020, 
    marca: "Honda",
    portas: 4,
})

gerenciadorMoto.adicionar({
    modelo: "CB 500",
    ano: 2021,
    marca: "Honda",
    cilindradas: 500,
})

console.log("Lista de Carros: ", gerenciadorCarros.listarVeiculos());
console.log("Lista de Motos: ", gerenciadorMoto.listarVeiculos());

gerenciadorCarros.remover("Civic");

console.log("Após remoção: ", gerenciadorCarros.listarVeiculos());
