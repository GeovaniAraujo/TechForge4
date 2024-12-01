class Veiculo {
    mover(): void{
        console.log(`O veiculo está está se movendo.`)
    }
}

class Carro extends Veiculo {
    mover():void{
        console.log(`O carro está dirigindo.`)
    }
}

class Bicicleta extends Veiculo {
    mover(): void{
        console.log(`A bicicleta está pedalando.`)
    }
}

let veiculo = new Veiculo;
let carro = new Carro;
let bicicleta = new Bicicleta;

veiculo.mover();
carro.mover();
bicicleta.mover();
