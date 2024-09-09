class Pessoa {
  constructor(nome, idade, altura, peso) {
    // Atributos
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
}
//Métodos
falar() {
    console.log(`Olá, meu nome é ${this.nome}!`);
    }
}