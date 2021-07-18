//classe pai humano
class Humano {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}
//classe filha cidadao, que herda os dados nome e idade de humano
class Cidadao extends Humano {
    constructor(nome, idade, rg, cpf){
        super(nome, idade);//comando super puxa os dados da funcao superior
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao1 = new Cidadao("Pedro", 18, '0000001', '00000000001');
console.log(cidadao1);
if (cidadao1 instanceof Humano) {
    //"instanceof" verifica se um elemento pertence a uma classe
    //e retorna um valor true ou false
    console.log(cidadao1.nome+" eh um cidadao e eh um humano.")
} 

// ok em 18 de julho de 2021