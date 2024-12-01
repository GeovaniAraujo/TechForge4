class Livro {
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    constructor(titulo: string, autor: string, paginas: number){
        this.titulo = titulo;
        this.autor = autor;
        this. paginas = paginas;
        this.lido = false;
    }

    ler(): void{
        this.lido = true;
    }

    getInfo(){
        console.log(`O livro ${this.titulo} do autor ${this.autor} tem ${this.paginas} páginas e ${this.lido ? "já" : "ainda não"} foi lido.`)
    }
}

let oHobbit = new Livro("O Hobbit","J.R.R. Tolkien",331);
let asValkirias = new Livro("As Valkírias","Paulo Coelho",239)

oHobbit.ler();

oHobbit.getInfo();
asValkirias.getInfo();