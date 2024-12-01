"use strict";
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getNome() {
        return this.nome;
    }
    getSalario() {
        return this.salario;
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.salario * 0.1;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.salario * 0.05;
    }
}
function calcularSalarioComBonus(func) {
    for (let i = 0; i < func.length; i++) {
        console.log(`O funcionario ${func[i].getNome()} ganha ${func[i].calcularBonus() + func[i].getSalario()}.`);
    }
}
let gerente = new Gerente("Mario", 5000);
let oerario = new Operario("Paulo", 2500);
calcularSalarioComBonus([gerente, oerario]);
