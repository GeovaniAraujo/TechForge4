interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {

    private produtos: ProdutoLoja[];

    constructor() {
        this.produtos = [];
    }

    adicionarProdutos(produto: ProdutoLoja): void{
        this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find((produto) => produto.codigo == codigo)
    }
}

let loja = new Loja();

loja.adicionarProdutos({codigo: 1, nome: "Monitor"});
loja.adicionarProdutos({codigo: 2, nome: "Tênis"});
loja.adicionarProdutos({codigo: 3, nome: "Violão"});

console.log(loja.buscarProdutoPorCodigo(2))