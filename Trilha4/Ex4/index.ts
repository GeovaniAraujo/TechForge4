interface Livros {
    titulo: string;
    autor: string;
    disponivel: boolean;

}

class Biblioteca {
    livros: Livros[];

    constructor(){
        this.livros = [];
    }

    adicionarLivros(livro: Livros): void{
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livros[] | undefined {
        return this.livros.filter((livro) => livro.disponivel == true)
    }
}

let biblioteca = new Biblioteca();

biblioteca.adicionarLivros({titulo: "O olho de vidro do meu avô", autor: "Bartolomeu Campos de Queirós", disponivel: true});
biblioteca.adicionarLivros({titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: false});
biblioteca.adicionarLivros({titulo: "Capitães da Areia", autor: "Jorge Amado", disponivel: true});
biblioteca.adicionarLivros({titulo: "A Revolução dos Bichos", autor: "George Orwell", disponivel: true});
biblioteca.adicionarLivros({titulo: "1984", autor: "George Orwell", disponivel: false});

console.log(biblioteca.buscarLivrosDisponiveis())