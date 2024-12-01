abstract class FiguraGeometrica {
    protected area: number;
    protected nome: string;

    constructor(){
        this.area = 0;
        this.nome = "";
    }

    abstract calcularArea(number: number, number2: number ): void;

    getArea(): number{
        return this.area;
    }
    getNome(): string{
        return this.nome;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(){
        super ();
        this.nome = "Circulo";
    }

    calcularArea(raio: number): void {
        this.area = raio**2;        
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(){
        super ();
        this.nome = "Quadrado";
    }

    calcularArea(base: number, altura: number): void {
        this.area = base*altura;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(){
        super ();
        this.nome = "Triangulo";
    }

    calcularArea(base: number, altura: number): void {
        this.area = base*altura/2;
    }
}



function arrayDeFiguras(array: FiguraGeometrica[]): void{
    for(let i: number = 0; i<array.length; i++){
        console.log(`O ${array[i].getNome()} tem área de ${array[i].getArea()} cm².`)
    }
}

let circulo = new Circulo();
let triangulo = new Triangulo();
let quadrado = new Quadrado();

circulo.calcularArea(15);
quadrado.calcularArea(8,10);
triangulo.calcularArea(12,15);

arrayDeFiguras([circulo,quadrado,triangulo])