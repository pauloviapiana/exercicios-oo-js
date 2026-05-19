// Subclasse que estende a classe nativa Array
class ListaOrdenada extends Array {
    push(...itens) {
    super.push(...itens);
    this.sort((a, b) => a - b);
    return this.length;
  }
}


const minhaLista = new ListaOrdenada();

console.log("Adicionando o número 10...");
minhaLista.push(10);
console.log(minhaLista); 

console.log("\nAdicionando o número 2...");
minhaLista.push(2);
console.log(minhaLista); // O 2 deve aparecer antes do 10

console.log("\nAdicionando os números 8 e 5 ao mesmo tempo...");
minhaLista.push(8, 5);
console.log(minhaLista); // A lista deve se reordenar para [2, 5, 8, 10]

// Como estende Array, todos os outros métodos de Array continuam funcionando
console.log(`\nTamanho atual da lista: ${minhaLista.length}`);
console.log(`Mapeando a lista (multiplicando por 2):`, minhaLista.map(x => x * 2));