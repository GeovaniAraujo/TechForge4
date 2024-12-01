"use strict";
class Loja {
    constructor() {
        this.produtos = [];
    }
    adicionarProdutos(produto) {
        this.produtos.push(produto);
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find((produto) => produto.codigo == codigo);
    }
}
let loja = new Loja();
loja.adicionarProdutos({ codigo: 1, nome: "Monitor" });
loja.adicionarProdutos({ codigo: 2, nome: "Tênis" });
loja.adicionarProdutos({ codigo: 3, nome: "Violão" });
console.log(loja.buscarProdutoPorCodigo(2));
