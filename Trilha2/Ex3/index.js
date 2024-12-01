"use strict";
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    valorEstoque() {
        console.log(`Valor em estoque: ${this.preco * this.quantidade}.`);
    }
}
let produto1 = new Produto("Bicicleta", 1200, 50);
produto1.valorEstoque();
