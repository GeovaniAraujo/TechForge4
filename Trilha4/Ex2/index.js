"use strict";
class Texto {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir() {
        return `Titulo: ${this.titulo}, Conteudo: ${this.conteudo}.`;
    }
}
let texto = new Texto("Documento", "Lorem ipsum dolor sit amet. Est architecto fuga non ipsam magni et tenetur expedita");
console.log(texto.exibir());
