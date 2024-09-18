//classe base Carros
class Jogo {
  constructor(nome, vida, forca, stamina, velocidade, agilidade, resistencia, magia, inteligencia, critico, habilidade) {
    this.nome = nome;
    this.vida = vida;
    this.forca = forca;
    this.stamina = stamina;
    this.velocidade = velocidade;
    this.agilidade = agilidade;
    this.resistencia = resistencia;
    this.magia = magia;
    this.inteligencia = inteligencia;
    this.critico = critico;
    this.habilidade = habilidade;
  }

  ataque(...args) {
    if (args.length === 0) {
      console.log(`${this.nome} realiza um ataque rapido!`);
    } else if (args.length === 1) {
      const arma = args[0];
      console.log(`${this.nome} ataca com ${arma}!`);
    } else if (args.length === 2) {
      const [tipoMagia, comMana] = args;
      if (comMana) {
        console.log(`${this.nome} dispara ${tipoMagia} com sua mana!`);
      } else {
        console.log(`${this.nome} dispara ${tipoMagia} sem mana`);
      }
    } else {
      console.log("Número de argumentos não suportado.");
    }
  }
  receberDano(dano) {
    this.resistencia -= dano;
    console.log(
      `${this.nome} recebeu ${dano} de dano! resistencia restante: ${this.resistencia}`
    );
  }

  velocidadeMaxima() {
    console.log(`${this.nome} está andando a ${this.velocidade}`);
  }
}

class Barbaro extends Jogo {
  constructor(nome, vida, forca, stamina, velocidade, agilidade, resistencia, magia, inteligencia, critico, habilidade, loucura, letalidade) {
    super(nome, vida, forca, stamina, velocidade, agilidade, resistencia, magia, inteligencia, critico, habilidade);
    this.loucura = loucura;
    this.letalidade = letalidade;
  }
  velocidadeMaxima() {
    console.log(
      `${this.nome} está a uma velocidade de ${this.velocidade} km por hora, devido sua loucura`
    );
  }

  receberDano(dano) {
    this.vida -= dano;
    console.log(`${this.nome} recebeu ${dano} de dano de seu inimigo`);
  }
}

class Ladrao extends Jogo {
  constructor(nome, vida, forca, stamina, velocidade, agilidade, resistencia, magia, inteligencia, critico, habilidade, furtividade, ocultaçao) {
    super(nome, vida, forca, stamina, velocidade, agilidade, resistencia, magia, inteligencia, critico, habilidade);
    this.furtividade = furtividade;
    this.ocultaçao = ocultaçao;
  }
  roubar() {
    console.log(
      `${this.nome} acaba de ultizar sua furtividade para roubar a habilidade de seu inimigo`);
  }

  receberDano(dano) {
    this.vida -= dano;
    console.log(`${this.nome} recebeu ${dano} de dano de seu inimigo`);
  }
}

class Gigante extends Jogo {
  constructor(nome, vida, forca, stamina, velocidade, agilidade, resistencia, magia, inteligencia, critico, habilidade, superforça) {
    super(nome, vida, forca, stamina, velocidade, agilidade, resistencia, magia, inteligencia, critico, habilidade);
    this.superforça = superforça;
  }
  destruir() {
    console.log(
      `${this.nome} destriu 5 casas com sua superforça`
    );
  }

  receberDano() {
    console.log(`${this.nome} recebeu ${dano} de dano de seu inimigo, porem nao surte efeito de vido sua enorme vida de ${this.vida}`);
  }
}

const barbaro = new Barbaro( "Barbaro", 100, 42, 32, 27, 14, 23, 0, 3, 23, 13, 50, 50)
barbaro.velocidadeMaxima();
barbaro.ataque()

const gigantes = new Gigante("Gigante", 100, 50, 10, 9, 5, 45, 20, 10, 27, 0, 50, 30)
gigantes.destruir();
gigantes.ataque();

const ladrao = new Ladrao ("Ladrao", 100, 10, 50, 30, 40, 45, 10, 35, 42, 0, 50, 30)
ladrao.roubar();
ladrao.receberDano(40);
