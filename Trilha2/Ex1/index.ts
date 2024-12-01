class Banco {
    private titular: string;
    private saldo: number;

    constructor(titular: string) {
        this.titular = titular;
        this.saldo = 0;
    }

    depositar(dinheiro: number): void{
        if (dinheiro <= 0){
            console.log("Este valor não é aceito.")
        } else {
            this.saldo = dinheiro;
        }
    }

    sacar(dinheiro: number): void{
        if (dinheiro >= this.saldo){
            console.log(`Saldo insuficiente, saldo atual:${this.saldo}`)
        } else {
            this.saldo = this.saldo - dinheiro;
            console.log(`Saldo atual: ${this.saldo}`)
        }    
    }

}

let conta1 = new Banco ("João");

conta1.depositar(1000);
conta1.sacar(500);