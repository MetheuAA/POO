// Classe abstrata "Personagem"
abstract class Personagem {
    protected String nome;

    // Constructor da classe "Personagem"
    public Personagem(String nome) {
        this.nome = nome;
    }

    // Método abstratos
    public abstract void atacar();
    public abstract void defender();
}
// Classe derivada "Guerreiro"
class Guerreiro extends Personagem {
    private String arma:

    // Constructor da classe Guerreiro
    public Guerreiro(String nome, String arma) {
        super(nome);
        this.arma = arma;
    }

    // Sobrescrita do método Atacar da classe Abstrata Personagem
    @Override
    public void atacar() {
        System.out.println(nome + " ataca com a " + arma + "!");
    }

    // Sobrescrita do método Defender da classe Abstrata Personagem
    @Override
    public void defender() {
        System.out.println(nome + " levanta o escudo para se defender!");
    }
}
