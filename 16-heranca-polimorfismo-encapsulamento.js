class Personagem {
  // Encapsulamento dos atributos com #, tornando-os privados.
  #nome;
  #classe;
  #nivel;
  #vida;
  #mana;

  // Método Contructor
  constructor(nome, classe, nivel, vida, mana) {
    this.#nome = nome;
    this.#classe = classe;
    this.#nivel = nivel;
    this.#vida = vida;
    this.#mana = mana;
  }
  //Métodos Getters e Setters
  // Método Getters e Setters para o atributo nome
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  // Método Getters e Setters para o atributo classe
  get classe() {
    return this.#classe;
  }
  set classe(classe) {
    this.#classe = classe;
  }
  get nivel() {
    return this.#nivel;
  }
  set nivel(nivel) {
    this.#nivel = nivel;
  }
  get vida() {
    return this.#vida;
  }
  set vida(vida) {
    this.#vida = vida;
  }
  get mana() {
    return this.#mana;
  }
  set mana(mana) {
    this.#mana = mana;
  }
  // Métodos
  // Simulando sobrecarga com rest parameter
  atacar(...args) {
    if (args.length === 0) {
        console.log(`${this.nome} realizou um ataque normal!`);
    } else if (args.length === 1) {
        console.log(`${this.#nome} atacou com um poder de ${args[0]}!}`);
    } else if (args.length === 2) {
        console.log(`${this.#nome} usou ${args[1]} e atacou com ${args[0]} de poder!`);
    } else {
        console.log("Número invalido de argumentos.");
    }
}

defesa() {
    console.log(`${this.#nome} se defendeu com ${this.#nivel * 2} pontos de defesa!`);
}

receber(dano) {
    this.#vida -= dano;
    console.log(`${this.#nome} recebeu ${dano} de dano! Vida restante: ${this.#vida}`);
    }
}
class Assassino extends Personagem {
    constructor(nome, nivel, vida, mana, furtividade) {
        super(nome, "Assassino", nivel, vida, mana);
        this.furtividade = furtividade;
    }

    // Sobrescrevendo o método atacar
    atacar() {
        console.log(`${this.nome} ataca silenciosamente com dano adicional pela furtividade!`);
    }

    //Método especifico
    usarFurtividade(){
        console.log(`${this.nome} usa sua furtividade de nivel ${this.furtividade} para se esconder!`);
    }
}
