//forca base Carros
class Jogo {
  #nome;
  #vida;
  #forca;
  #stamina;
  #velocidade;
  #agilidade;
  #resistencia;
  #magia;
  #inteligencia;
  #critico;
  #habilidade;
  constructor(
    nome,
    vida,
    forca,
    stamina,
    velocidade,
    agilidade,
    resistencia,
    magia,
    inteligencia,
    critico,
    habilidade
  ) {
    this.#nome = nome;
    this.#vida = vida;
    this.#forca = forca;
    this.#stamina = stamina;
    this.#velocidade = velocidade;
    this.#agilidade = agilidade;
    this.#resistencia = resistencia;
    this.#magia = magia;
    this.#inteligencia = inteligencia;
    this.#critico = critico;
    this.#habilidade = habilidade;
  }

  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  get forca() {
    return this.#forca;
  }
  set forca(forca) {
    this.#forca = forca;
  }
  get stamina() {
    return this.#stamina;
  }
  set stamina(stamina) {
    this.#stamina = stamina;
  }
  get vida() {
    return this.#vida;
  }
  set vida(vida) {
    this.#vida = vida;
  }
  get velocidade() {
    return this.#velocidade;
  }
  set velocidade(velocidade) {
    this.#velocidade = velocidade;
  }
  get agilidade() {
    return this.#agilidade;
  }
  set agilidade(agilidade) {
    this.#agilidade = agilidade;
  }
  get resistencia() {
    return this.#resistencia;
  }
  set resistencia(resistencia) {
    this.#resistencia = resistencia;
  }
  get magia() {
    return this.#magia;
  }
  set magia(magia) {
    this.#magia = magia;
  }
  get inteligencia() {
    return this.#inteligencia;
  }
  set inteligencia(inteligencia) {
    this.#inteligencia = inteligencia;
  }
  get critico() {
    return this.#critico;
  }
  set critico(critico) {
    this.#critico = critico;
  }
  get habilidade() {
    return this.#habilidade;
  }
  set habilidade(habilidade) {
    this.#habilidade = habilidade;
  }

  ataque(...args) {
    if (args.length === 0) {
      console.log(`${this.#nome} realiza um ataque rapido!`);
    } else if (args.length === 1) {
      const arma = args[0];
      console.log(`${this.#nome} ataca com ${arma}!`);
    } else if (args.length === 2) {
      const [tipoMagia, comMana] = args;
      if (comMana) {
        console.log(`${this.#nome} dispara ${tipoMagia} com sua mana!`);
      } else {
        console.log(`${this.#nome} dispara ${tipoMagia} sem mana`);
      }
    } else {
      console.log("Número de argumentos não suportado.");
    }
  }
  receberDano(dano) {
    this.#resistencia -= dano;
    console.log(
      `${this.#nome} recebeu ${dano} de dano! resistencia restante: ${
        this.#resistencia
      }`
    );
  }

  velocidadeMaxima() {
    console.log(`${this.#nome} está andando a ${this.#velocidade}`);
  }
}

class Barbaro extends Jogo {
  #loucura;
  #letalidade;
  constructor(
    nome,
    vida,
    forca,
    stamina,
    velocidade,
    agilidade,
    resistencia,
    magia,
    inteligencia,
    critico,
    habilidade,
    loucura,
    letalidade
  ) {
    super(
      nome,
      vida,
      forca,
      stamina,
      velocidade,
      agilidade,
      resistencia,
      magia,
      inteligencia,
      critico,
      habilidade
    );
    this.#loucura = loucura;
    this.#letalidade = letalidade;
  }
  get loucura() {
    return this.#loucura;
  }
  set loucura(loucura) {
    this.#loucura = loucura;
  }
  get letalidade() {
    return this.#letalidade;
  }
  set letalidade(letalidade) {
    this.#letalidade = letalidade;
  }

  velocidadeMaxima() {
    console.log(
      `${this.nome} está a uma velocidade de ${
        this.velocidade
      } km por hora, devido sua loucura`
    );
  }

  receberDano(dano) {
    this.vida -= dano;
    console.log(`${this.nome} recebeu ${dano} de dano de seu inimigo`);
  }
}

class Ladrao extends Jogo {
  #furtividade;
  #ocultacao;
  constructor(
    nome,
    vida,
    forca,
    stamina,
    velocidade,
    agilidade,
    resistencia,
    magia,
    inteligencia,
    critico,
    habilidade,
    furtividade,
    ocultacao
  ) {
    super(
      nome,
      vida,
      forca,
      stamina,
      velocidade,
      agilidade,
      resistencia,
      magia,
      inteligencia,
      critico,
      habilidade
    );
    this.#furtividade = furtividade;
    this.#ocultacao = ocultacao;
  }
  get furtividade() {
    return this.#furtividade;
  }
  set furtividade(furtividade) {
    this.#furtividade = furtividade;
  }
  get ocultacao() {
    return this.#ocultacao;
  }
  set ocultacao(ocultacao) {
    this.#ocultacao = ocultacao;
  }

  roubar() {
    console.log(
      `${
        this.nome
      } acaba de ultizar sua furtividade para roubar a habilidade de seu inimigo`
    );
  }

  receberDano(dano) {
    this.vida -= dano;
    console.log(`${this.nome} recebeu ${dano} de dano de seu inimigo`);
  }
}

class Gigante extends Jogo {
  #superforca;
  constructor(
    nome,
    vida,
    forca,
    stamina,
    velocidade,
    agilidade,
    resistencia,
    magia,
    inteligencia,
    critico,
    habilidade,
    superforca
  ) {
    super(
      nome,
      vida,
      forca,
      stamina,
      velocidade,
      agilidade,
      resistencia,
      magia,
      inteligencia,
      critico,
      habilidade
    );
    this.#superforca = superforca;
  }
  get superforca() {
    return this.#superforca;
  }
  set superforca(superforca) {
    this.#superforca = superforca;
  }
  destruir() {
    console.log(`${this.nome} destruiu 5 casas com sua superforca`);
  }

  receberDano() {
    console.log(
      `${
        this.nome
      } recebeu ${dano} de dano de seu inimigo, porem nao surte efeito de vido sua enorme vida de ${
        this.vida
      }`
    );
  }
}

const barbaro = new Barbaro(
  "Barbaro",
  100,
  42,
  32,
  27,
  14,
  23,
  0,
  3,
  23,
  13,
  50,
  50
);
barbaro.velocidadeMaxima();
barbaro.ataque();

const gigantes = new Gigante(
  "Gigante",
  100,
  50,
  10,
  9,
  5,
  45,
  20,
  10,
  27,
  0,
  50,
  30
);
gigantes.destruir();
gigantes.ataque();

const ladrao = new Ladrao(
  "Ladrao",
  100,
  10,
  50,
  30,
  40,
  45,
  10,
  35,
  42,
  0,
  50,
  30
);
ladrao.roubar();
ladrao.receberDano(40);

console.log("----------------------------------------------------------------");
console.log("Modificando os objetos usando setters:");
console.log("----------------------------------------------------------------");

//Modificando o objeto assassno usando setters
barbaro.nome = "Thorfinn";
console.log(`Nome modificado: ${barbaro.nome}`);
barbaro.ataque();

