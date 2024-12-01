"use strict";
class Agenda {
    constructor(comppromissos) {
        this.compromissos = comppromissos;
    }
    adicionaCompromisso(compromisso) {
        this.compromissos.push(compromisso);
    }
    verCompromissos() {
        for (let i = 0; i < this.compromissos.length; i++) {
            console.log(this.compromissos[i]);
        }
    }
}
let agenda1 = new Agenda(["Ir ao cinema"]);
agenda1.adicionaCompromisso("Pacear com o cachorro");
agenda1.adicionaCompromisso("Jogatina com os aliado");
agenda1.verCompromissos();
