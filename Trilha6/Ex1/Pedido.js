"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = exports.Envio = exports.Pagamento = exports.Carrinho = void 0;
class Carrinho {
    constructor() {
        this.itens = [];
    }
    adicionarItem(nome, preco) {
        this.itens.push({ nome, preco });
    }
    obterItens() {
        return this.itens;
    }
    calcularPrecoTotal() {
        return this.itens.reduce((total, item) => total + item.preco, 0);
    }
}
exports.Carrinho = Carrinho;
class Pagamento {
    constructor() {
        this.statusPagamento = false;
    }
    processarPagamento(precoTotal) {
        if (precoTotal > 0) {
            this.statusPagamento = true;
        }
        return this.statusPagamento;
    }
    obterStatus() {
        return this.statusPagamento;
    }
}
exports.Pagamento = Pagamento;
class Envio {
    constructor() {
        this.statusEnvio = false;
    }
    atualizarStatusEnvio(statusPagamento) {
        if (statusPagamento) {
            this.statusEnvio = true;
        }
    }
    obterStatus() {
        return this.statusEnvio;
    }
}
exports.Envio = Envio;
class Pedido {
    constructor() {
        this.carrinho = new Carrinho();
        this.pagamento = new Pagamento();
        this.envio = new Envio();
    }
    adicionarItem(nome, preco) {
        this.carrinho.adicionarItem(nome, preco);
    }
    finalizarPedido() {
        const precoTotal = this.carrinho.calcularPrecoTotal();
        const pagamentoAprovado = this.pagamento.processarPagamento(precoTotal);
        this.envio.atualizarStatusEnvio(pagamentoAprovado);
    }
    detalhesDoPedido() {
        return {
            itens: this.carrinho.obterItens(),
            precoTotal: this.carrinho.calcularPrecoTotal(),
            statusPagamento: this.pagamento.obterStatus(),
            statusEnvio: this.envio.obterStatus(),
        };
    }
}
exports.Pedido = Pedido;
