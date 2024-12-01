class Agenda {
    private compromissos: string[];

    constructor(comppromissos: string[]){
        this.compromissos = comppromissos;
    }

    adicionaCompromisso(compromisso: string): void{
        this.compromissos.push(compromisso);
    }
    
    verCompromissos(): void{
        for(let i: number = 0; i < this.compromissos.length; i++){
            console.log(this.compromissos[i])
        }
    }
}

let agenda1 = new Agenda(["Ir ao cinema"]);


agenda1.adicionaCompromisso("Pacear com o cachorro");
agenda1.adicionaCompromisso("Jogatina com os aliado");

agenda1.verCompromissos();