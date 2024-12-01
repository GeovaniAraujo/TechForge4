interface Documento{
    titulo: string;
    conteudo: string;
}

class Texto implements Documento{
    titulo: string;
    conteudo: string;

    constructor(titulo: string, conteudo: string){
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    exibir(): string{
        return `Titulo: ${this.titulo}, Conteudo: ${this.conteudo}.`
    }
}

let texto = new Texto("Documento","Lorem ipsum dolor sit amet. Est architecto fuga non ipsam magni et tenetur expedita");

console.log(texto.exibir());