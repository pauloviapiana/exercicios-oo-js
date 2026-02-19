// 4
class Cofre{
    #senha
    #conteudo = []

    constructor(senhaCofre){
        this.#senha = senhaCofre
    }

    inserirItem(item, senhaCofre){
        if (senhaCofre == this.#senha){
            this.#conteudo.push(item)
            console.log(`${item} foi adicionado a lista!`)
        }
        else{
            console.log('Senha inválida')
        }
    }

    retirarItem(itemRemover, senhaCofre){
        if (senhaCofre == this.#senha){
            const indexItem = this.#conteudo.indexOf(itemRemover)
            if(indexItem != -1){
                this.#conteudo.splice(indexItem, 1)
                console.log(`${itemRemover} foi removido da lista!`)
            } else{
                console.log('Item não encontrado')
            }
            this.#conteudo.slice(indexItem, 1)
        }
        else{
            console.log('Senha inválida')
        }
    }

    verCofre(senhaCofre){
        if (senhaCofre == this.#senha){
            for(let cadaItem of this.#conteudo){
                console.log('Item: ', cadaItem)
            }
        }
        else{
            console.log('Senha inválida')
        }
    }
}

const CofrePaulo = new Cofre('123456')

CofrePaulo.inserirItem('Rolex', '123456')
CofrePaulo.retirarItem('Rolex', '123456')
CofrePaulo.retirarItem('Tiara', '123456')
CofrePaulo.inserirItem('Anel', '123456')
CofrePaulo.verCofre('123456')