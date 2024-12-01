abstract class Funcionario {
    protected nome: string;
    protected salario: number;

    constructor (nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularBonus(): number;
    getNome(): string{
        return this.nome;
    }
    getSalario(): number{
        return this.salario;
    }
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.1
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.05
    }
}

function calcularSalarioComBonus(func: Funcionario[]){
    for(let i: number = 0; i < func.length; i++){
        console.log(`O funcionario ${func[i].getNome()} ganha ${func[i].calcularBonus()+func[i].getSalario()}.`)
    }
}

let gerente = new Gerente("Mario",5000);
let oerario = new Operario("Paulo",2500);

calcularSalarioComBonus([gerente,oerario]);