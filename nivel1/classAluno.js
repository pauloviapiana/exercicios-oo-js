class Aluno{
    constructor(notas){
        this.notas = notas
    }

    calcularMedia(){
        let media = 0
        let soma = 0
        for(let i = 0; i < this.notas.length; i++){
            soma += this.notas[i]
        }
        let divisor = this.notas.length
        media = (soma / divisor)
        console.log(media.toFixed(2))
    }
}

const alunoPaulo = new Aluno([10, 7, 6])
alunoPaulo.calcularMedia()