class Personagem {
    // Atributos
    private String nome;
    private int vida;
    // Método Construtor da classe Personagem
    public Personagem(String nome, int vida) {
        this.nome = nome;
        this.vida = vida;
    }
    //Sobrecarga do método atacar
    public void atacar() {
        System.out.println(nome: + " realiza um ataque básico!" );
    }
    public void atacar(String arma) {
        System.out.println(nome + " ataca com o " + arma + "!");
    }
        public void atacar(String tipoFlecha, boolean comArco) {
            if (comArco) {
    } else {
        System.out.println(nome + " dispara flechas " + tipoFlecha + " sem arco!");
        }
    }
    public void receberDano(int dano) {
        vida -= dano;
        System.out.println(nome + " recebeu " + dano + " de dano. Vida restante: " + vida);
    }
}