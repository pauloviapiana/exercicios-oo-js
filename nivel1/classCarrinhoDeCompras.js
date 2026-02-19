class CarrinhoDeCompras{
    constructor(){
        this.itens = []
    }

    adicionar_item(produto){
        this.itens.push(produto)
    }

    calcular_subtotal(){
        let total = 0
        for(const item of this.itens){
            total += item.preco
        }
        console.log(`O total do carrinho é de R$${total.toFixed(2)}`)
    }
}


class Produto{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
}

MeuCarrinho = new CarrinhoDeCompras()

RelogioProduto = new Produto('Relógio', 122.00)
CamisetaProduto = new Produto('Camiseta', 59.90)
BolsaProduto = new Produto('Bolsa', 85.00)


MeuCarrinho.adicionar_item(RelogioProduto)
MeuCarrinho.adicionar_item(CamisetaProduto)
MeuCarrinho.adicionar_item(BolsaProduto)


MeuCarrinho.calcular_subtotal()
