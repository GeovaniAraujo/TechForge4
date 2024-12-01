interface Produtos {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produtos{
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number){
       this.id = id
       this.nome = nome;
       this.preco = preco;
    }
}

let produto = new ItemLoja(1,"Sapato",300);