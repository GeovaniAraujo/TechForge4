interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao{
    livros: LivroBiblioteca[];

    constructor() {
        this.livros = [];
    }

    adicionarLivros(livro: LivroBiblioteca): void{
        this.livros.push(livro);
    }

    filtraPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter((livro) => livro.genero == genero)
    }

    buscaPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter((livro) => livro.autor == autor)
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros.filter((livro) => livro.disponivel == true).sort();
    }
}

let bibliotecaGestao = new BibliotecaGestao();

bibliotecaGestao.adicionarLivros({titulo: "O Alquimista", autor: "Paulo Coelho", genero: "Ficção", disponivel: true});
bibliotecaGestao.adicionarLivros({titulo: "Brida", autor: "Paulo Coelho", genero: "Ficção", disponivel: false});
bibliotecaGestao.adicionarLivros({titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", genero: "Drama", disponivel: true});
bibliotecaGestao.adicionarLivros({titulo: "A Sombra do Vento", autor: "Carlos Ruiz Zafón", genero: "Mistério", disponivel: true});
bibliotecaGestao.adicionarLivros({titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true});
bibliotecaGestao.adicionarLivros({titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true});
bibliotecaGestao.adicionarLivros({titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true});
bibliotecaGestao.adicionarLivros({titulo: "Revolução dos Bichos", autor: "George Orwell", genero: "Distopia", disponivel: false});
bibliotecaGestao.adicionarLivros({titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", genero: "Clássico", disponivel: true});
bibliotecaGestao.adicionarLivros({titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", disponivel: false});

console.log(bibliotecaGestao.buscaPorAutor("Paulo Coelho"));
console.log(bibliotecaGestao.buscaPorAutor("George Orwell"));

console.log(bibliotecaGestao.filtraPorGenero("Ficção"));

console.log(bibliotecaGestao.obterLivrosDisponiveisOrdenados());