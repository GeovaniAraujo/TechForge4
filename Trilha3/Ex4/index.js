"use strict";
class Animal {
    constructor() {
        this.energia = 20;
    }
    comer() {
        this.energia = this.energia + 5;
    }
    statusEnergia() {
        console.log(`Energia: ${this.energia}`);
    }
}
class Leao extends Animal {
    comer() {
        console.log("O leão caçou.");
        this.energia = -5;
        this.energia = +10;
    }
}
class Passaro extends Animal {
    comer() {
        console.log("O passaro comeu.");
        this.energia = +15;
    }
}
let leao = new Leao;
let passaro = new Passaro;
leao.statusEnergia();
passaro.statusEnergia();
leao.comer();
passaro.comer();
leao.statusEnergia();
passaro.statusEnergia();
