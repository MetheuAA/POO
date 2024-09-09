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
  falarIdade() {
    console.log(`minha idade é ${this.idade}!`);
  }

}
//Objeto/instancia "pessoa1" criada apartir da classe Pessoa
const pessoa1 = new Pessoa('wanderson', 40, 1.65, 70,0);
pessoa1.falar(); // Chamada do método falar() da classe Pessoa
pessoa1.falarIdade();

const pessoa2 = new Pessoa('Matheo', 16, 1.78, 82,0);
pessoa2.falar(); // Chamada do método falar() da classe Pessoa
pessoa2.falarIdade();

const pessoa3 = new Pessoa('cleber', 37, 1.70, 70,0);
pessoa3.falar(); // Chamada do método falar() da classe Pessoa
pessoa3.falarIdade();
