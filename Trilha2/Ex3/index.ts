class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    valorEstoque(): void{
        console.log(`Valor em estoque: ${this.preco * this.quantidade}.`)
    }
}

let produto1 = new Produto("Bicicleta",1200,50);

produto1.valorEstoque();