class Config{
    #serverId
    constructor(id){
        this.#serverId = id
    }

    get serverId(){
        return this.#serverId
    }
    
}

const configuracao = new Config(123)
configuracao.serverId = 345
console.log(configuracao.serverId)
