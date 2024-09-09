class Brasil {
  constructor(continente, capital, praia, idioma, animal) {
    // Atributos
    this.continente = continente;
    this.capital = capital;
    this.praia = praia;
    this.idioma = idioma;
    this.animal = animal;
  }
  //Métodos
  falar() {
    console.log(`Localizado em ${this.continente}!`);
  }
  verCapital() {
    console.log(`Capital: ${this.capital}`);
  }
  falarIdioma() {
    console.log(`Idioma oficial: ${this.idioma}`);
  }
}
