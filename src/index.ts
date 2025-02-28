import { Veiculo } from "./interface/Veiculo";
import { gerarRelatorio } from "./utils/RelatorioVeiculos";

const veiculos: Veiculo[] =[
    {modelo: "Civic", ano: 2020, marca: "Honda"},
    {modelo: "Corolla", ano: 2021, marca: "Toyota"},
    {modelo: "CB 500", ano: 2022, marca: "Honda"},
];

console.log("Relátprop de Veículos: \n", gerarRelatorio(veiculos));