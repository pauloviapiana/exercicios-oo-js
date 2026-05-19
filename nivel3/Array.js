// Subclasse que estende a classe nativa Array
class ListaOrdenada extends Array {
  
  // Sobrescreve o método push
  // Utilizamos o operador rest (...itens) pois o push pode receber múltiplos argumentos
  push(...itens) {
    // 1. Chama o método push original da classe Array usando super
    super.push(...itens);

    // 2. Ordena o array automaticamente após a inserção
    // Obs: A função (a, b) => a - b garante que os números sejam ordenados corretamente
    // do menor para o maior. Se fosse texto, apenas this.sort() bastaria.
    this.sort((a, b) => a - b);

    // 3. O método push nativo sempre retorna o novo tamanho do array
    return this.length;
  }
}

// --- Testando a implementação ---

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