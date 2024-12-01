class Temperatura {
    private valor: number;

    constructor(valor: number){
        this.valor = valor;
    }

    celciusTofahrenheit(): void{
       console.log(`${this.valor = (this.valor*9/5) + 32}F°`);
    }

    celciusToKelvin(): void{
        console.log(`${this.valor = this.valor + 273.15}K°`)
    }
}

let temperatura1 = new Temperatura(28);

let temperatura2 = new Temperatura(22);

temperatura1.celciusTofahrenheit();
temperatura2.celciusToKelvin();