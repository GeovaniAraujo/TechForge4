"use strict";
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    celciusTofahrenheit() {
        console.log(`${this.valor = (this.valor * 9 / 5) + 32}F°`);
    }
    celciusToKelvin() {
        console.log(`${this.valor = this.valor + 273.15}K°`);
    }
}
let temperatura1 = new Temperatura(28);
let temperatura2 = new Temperatura(22);
temperatura1.celciusTofahrenheit();
temperatura2.celciusToKelvin();
