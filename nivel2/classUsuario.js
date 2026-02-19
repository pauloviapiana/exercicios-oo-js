class Usuario{
    #idade
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    get idade(){
        return this.#idade
    }

    set idade(novaIdade){
        if(novaIdade > 0 && novaIdade <  120){
            this.#idade = novaIdade
            console.log('Usuário cadastrado com sucesso!')
        }
        else{
            console.log('Idade inválida!')
        }
    }
}

const user = new Usuario('Paulo', 23)
