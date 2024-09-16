//classe base Carros
class Carros {
  constructor(marca, modelo, velocidade, cambio, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidade = velocidade;
    this.cambio = cambio;
    this.cor = cor;
  }

  velocidadeMaxima() {
    console.log(`${this.modelo} está andando a ${this.velocidade}`);
  }

  tempoChegada() {
    this.modelo -= tempo;
    console.log(
      `${this.modelo} chegou em ${tempo} ${this.modelo.tempoChegada()}`
    );
  }
}

// Classe Guerreiro que herda de Carros
class BMW extends Carros {
  constructor(marca, modelo, velocidade, cambio, cor, vidro, teto) {
    super(marca, modelo, velocidade, cambio, cor);
    this.vidro = vidro;
    this.teto = teto;
  }
  velocidadeMaxima() {
    console.log(`${this.modelo} está a uma velocidade de ${this.velocidade} km por hora`);
  }

  tempoChegada() {
    console.log(
      `${this.modelo} finalizou o percuso em 10 segundos`
    );
  }
}

// Classe Honda que herda de Carros

class Honda extends Carros {
  constructor(marca, modelo, velocidade, cambio, cor, ano, motor) {
    super(marca, modelo, velocidade, cambio, cor);
    this.ano = ano;
    this.motor = motor;
  }
  velocidadeMaxima() {
    console.log(`${this.modelo} está em ${this.velocidade} km por hora`);
  }

  tempoChegada() {
    console.log(
      `${this.modelo} terminou em 15 segundos`
    );
  }
}

//Criando instancias de Guerreiro, Honda e Arqueiro
const bmw = new BMW ("BMW", "m3", 200, "automatico", "temperado", "tem teto")
bmw.velocidadeMaxima(); //Saída: Arthur ataca com a espada!
bmw.tempoChegada(10); //Saída: Arthur recebeu 20 de dano. Vida restante: 80

const honda = new Honda("Honda", "Civic", 180, "automatico", "2023", "v8");
honda.velocidadeMaxima(); //Saída: Merlin lança bola de fogo!
honda.tempoChegada(15); // Saída: Merlin recebeu 15 de dano. Vida restante: 65