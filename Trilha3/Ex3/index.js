"use strict";
class Pagamento {
    processar() { }
}
class PagamentoCartao extends Pagamento {
    constructor(numCartao) {
        super();
        this.numCartao = numCartao;
    }
    processar() {
        if (this.numCartao.length == 16) {
            console.log(`Pagamento processado com o cartão: ${this.numCartao}.`);
        }
        else {
            console.log("Número de cartão inválido.");
        }
    }
}
class PagamentoBoleto extends Pagamento {
    processar() {
        console.log(`Pagamento processado, código do boleto: ${123456789101112}`);
    }
}
function pgmt(pgmt) {
    pgmt.processar();
}
pgmt(new PagamentoBoleto);
pgmt(new PagamentoCartao("1234567891234567"));
