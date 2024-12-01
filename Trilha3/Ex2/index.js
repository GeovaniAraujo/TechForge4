"use strict";
class FiguraGeometrica {
    constructor() {
        this.area = 0;
        this.nome = "";
    }
    getArea() {
        return this.area;
    }
    getNome() {
        return this.nome;
    }
}
class Circulo extends FiguraGeometrica {
    constructor() {
        super();
        this.nome = "Circulo";
    }
    calcularArea(raio) {
        this.area = raio ** 2;
    }
}
class Quadrado extends FiguraGeometrica {
    constructor() {
        super();
        this.nome = "Quadrado";
    }
    calcularArea(base, altura) {
        this.area = base * altura;
    }
}
class Triangulo extends FiguraGeometrica {
    constructor() {
        super();
        this.nome = "Triangulo";
    }
    calcularArea(base, altura) {
        this.area = base * altura / 2;
    }
}
function arrayDeFiguras(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`O ${array[i].getNome()} tem área de ${array[i].getArea()} cm².`);
    }
}
let circulo = new Circulo();
let triangulo = new Triangulo();
let quadrado = new Quadrado();
circulo.calcularArea(15);
quadrado.calcularArea(8, 10);
triangulo.calcularArea(12, 15);
arrayDeFiguras([circulo, quadrado, triangulo]);
