class Veiculo {
    constructor(marca){
        this.marca = marca;
    }

    mover(){
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo{
    constructor(marca, quantidadePortas){
        super(marca);
        this.quantidadePortas = quantidadePortas;
    }

    mover(){
        console.log(`O carro da marca ${this.marca} com ${this.quantidadePortas} portas está se movendo pela estrada`);
    }
}

class Aviao extends Veiculo{
    constructor(marca, altitudeMaxima){
        super(marca);
        this.altitudeMaxima = altitudeMaxima;
    }

    mover(){
        console.log(`O avião da marca ${this.marca} está se movendo pelo ar a uma altitude de ${this.altitudeMaxima} pés`)
    }
}

const meuCarro = new Carro("Toyota", 4);
const meuAviao = new Aviao("Boeing", 4000);

meuCarro.mover()
meuAviao.mover()