//Classe base "Personagem" simulando uma classe abstrata
class Personagem {
    constructor(nome) {
        if (new.target === Personagem) {
            throw new Error("Não é possivel instanciar a classe abstrata Personagem diretamente");
        }
        this.nome = nome;
    }

//Método abstrato simulado
atacar() {
    throw new Error("O método atacar() deve ser implementado pela classe derivada");
}

//Método abstrato simulado
defender() {
    throw new Error("O método defender() deve ser implementado pela classe derivada");
}
}
//Classe derivada "Guerreiro"
class Guerreiro extends Personagem {
    constructor(nome, arma) {
        super(nome);
        this.arma = arma;
    }

    // Implementação dos métodos abstrados da classe Persongem
    atacar() {
        console.log(`${this.nome} ataca com a ${this.arma}!`);
    }

    defender() {
        console.log(`${this.nome} levantou o escudo para se defender!`);
    }
}