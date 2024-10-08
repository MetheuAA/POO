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

receberDano(dano) {
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
// Classe derivada - paladino
class Paladino extends Personagem {
    constructor(nome, nivel, vida, mana, fe) {
        super(nome, "Paladino", nivel, vida, mana);
        this.fe = fe;
    }

    // Sobrescrevendo o método defesa
    defesa() {
        console.log(`${this.nome} se defendeu com escudo sagrado, absorvendo mais dano com base na fé ${this.fe}!`);
    }

    // Método especifico
    curar() {
        console.log(`${this.nome} usa sua fé para curar a si mesmo ou aliados!`);
    }
}
//Classe derivada - Mecanico

class Mecanico extends Personagem {
    constructor(nome, nivel, vida, mana, engenharia) {
        super(nome, "Mecanico", nivel, vida, mana);
        this.engenharia = engenharia;
    }

    // Sobrescrevendo o método receberDano
    receberDano(dano) {
        const danoReduzido = dano - this.engenharia;
        super.receberDano(danoReduzido);
        console.log(`${this.nome} usou sua engenharia para reduzir o dano em ${this.engenharia}.`);
    }

    //Método específico
    contruirTorre(){
        console.log(`${this.nome} contruiu uma torre defensiva!`);
    }
}

// Criando instancia da ckasse derivada Assassino
const assassino = new Assassino ("Luna Sombria", 10, 100, 50, 8);
//Chamando os métodos
assassino.atacar(); // Método sobrescritor
assassino.usarFurtividade(); // Método específico

//Criando instancia da classe derivada Paladino
const paladino = new Paladino ("Sir Lancelot", 12, 120, 70, 15);
// Chamando os métodos
paladino.defesa(); //Método sobrescrito
paladino.curar(); //Método específico

//criando instancia da classe derivada Mecanico
const mecanico = new Mecanico("Roberto das Engrenagens", 8, 90, 40, 5);
//Chamando os métodos
mecanico.receberDano(30); // Método sobrescrito
mecanico.contruirTorre(); // Método especifico

console.log("----------------------------------------------------------------")
console.log("Modificando os objetos usando setters:");
console.log("----------------------------------------------------------------");

//Modificando o objeto assassno usando setters
assassino.nome = "Raven";
console.log(`Nome modificado: ${assassino.nome}`);
assassino.atacar();

//Modificando o objeto paladino usando setters
paladino.vida = 150;
console.log(`Vida modificada: ${paladino.vida}`);
paladino.defesa();

//Modificando o objeto mecanico usando setters
mecanico.mana = 60;
console.log(`Mana modificada: ${mecanico.mana}`);
mecanico.receberDano(50);