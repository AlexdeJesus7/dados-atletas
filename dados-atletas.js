class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  // Método para calcular a categoria com base na idade
  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  // Método para calcular o IMC
  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  // Método para calcular a média válida
  calculaMediaValida() {
    let notasOrdenadas = this.notas.sort((a, b) => a - b); // Ordena as notas em ordem crescente
    let notasValidas = notasOrdenadas.slice(1, 4); // Remove a maior e a menor nota
    let soma = notasValidas.reduce((total, nota) => total + nota, 0); // Soma as notas válidas
    return soma / notasValidas.length; // Calcula a média
  }

  // Método para retornar o nome do atleta
  obtemNomeAtleta() {
    return this.nome;
  }

  // Método para retornar a idade do atleta
  obtemIdadeAtleta() {
    return this.idade;
  }

  // Método para retornar o peso do atleta
  obtemPesoAtleta() {
    return this.peso;
  }

  // Método para retornar as notas do atleta
  obtemNotasAtleta() {
    return this.notas;
  }

  // Método para retornar a categoria do atleta
  obtemCategoria() {
    return this.calculaCategoria();
  }

  // Método para retornar o IMC do atleta
  obtemIMC() {
    return this.calculaIMC();
  }

  // Método para retornar a média válida do atleta
  obtemMediaValida() {
    return this.calculaMediaValida();
  }
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.altura}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(',')}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);
