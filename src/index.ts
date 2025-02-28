import { EstoqueVeiculos } from "./classes/EstoqueVeiculos";

const estoque = new EstoqueVeiculos();

estoque.adicionarEstoque("Civic", 5);
estoque.adicionarEstoque("CB 500", 2);

console.log("Estoque após adição: ", estoque.consultaEstoque("Civic"));

estoque.removeEstoque("Civic", 3);

console.log("Estoque após remoção: ", estoque.consultaEstoque("Civic"));


