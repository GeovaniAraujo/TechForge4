class Pagamento {
    processar(): void{}
}

class PagamentoCartao extends Pagamento{
    private numCartao: string;

    constructor(numCartao: string){
        super();
        this.numCartao = numCartao;
    }

    processar(): void {
        if(this.numCartao.length == 16){
            console.log(`Pagamento processado com o cartão: ${this.numCartao}.`)
        } else {
            console.log("Número de cartão inválido.")
        }
    }
}

class PagamentoBoleto extends Pagamento{
    processar(): void {
        console.log(`Pagamento processado, código do boleto: ${123456789101112}`)
    }
}

function pgmt(pgmt: Pagamento){
    pgmt.processar();    
}

pgmt(new PagamentoBoleto);
pgmt(new PagamentoCartao("1234567891234567"))