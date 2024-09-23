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
}