import { filtrarPorAno, filtrarPorMarca, filtrarPorModelo } from "./classes/FiltroVeiculo";
import { Veiculo } from "./interface/Veiculo";

const veiculos: Veiculo[] =[
    {modelo: "Civic", ano: 2020, marca: "Honda"},
    {modelo: "Corolla", ano: 2021, marca: "Toyota"},
    {modelo: "CB 500", ano: 2022, marca: "Honda"},
];

console.log("Veículos de 2021: ", filtrarPorAno(veiculos, 2021));
console.log("Veículos da marca Honda: ", filtrarPorMarca(veiculos, "Honda"));
console.log("Veículos modelo Civic: ", filtrarPorModelo(veiculos, "Civic"));



