class Livro{
    constructor(titulo, autor, ano){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }

    descrever(){
        return `Titulo: ${this.titulo} | Autor: ${this.autor} | Ano: ${this.ano}`
    }
}

const livroJogosVorazes = new Livro('Jogos Vorazes', 'Suzane Collins', 2012)
console.log(livroJogosVorazes.descrever())