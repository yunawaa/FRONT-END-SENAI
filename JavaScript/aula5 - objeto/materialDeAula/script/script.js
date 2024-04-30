// var clienteNome = "Leo";
// var clienteAgencia = "12345-x";
// var cliente1TipoDeConta = "Corrente";
// var cliente1CPF = "000.000.000-00"
// cliente1Saldo = "100";

var cliente1 = ["nome = Leo"];

class cliente {
    nome;
    agencia;
    tipodeconta;
    cpf;
    saldo;
    depositar (valor){
        this.saldo  += valor;
        let resultado = document.querySelector("#teste1");
        resultado.innerHTML = `
        <p>NOME DA CONTA : ${this.nome}</p>
        <p>O SALDO DA CONTA : ${this.saldo}</p>
        `;
    };
    sacar(valor){
        this.saldo  -= valor;
        let resultado = document.querySelector("#teste1");
        resultado.innerHTML = `
        <p>NOME DA CONTA : ${this.nome}</p>
        <p>O SALDO DA CONTA : ${this.saldo}</p>
        `;       
    }
}

function depositar(){
    let valorInput = Number (document.querySelector("#cadastrar").value);
    cliente1.depositar(valorInput);

}

var cliente1 = new cliente();
cliente1.nome = "Yuna";
cliente1.agencia = "12345-x";
cliente1.tipodeconta = "Corrente";
cliente1.cpf = "000.000.000-00"
cliente1.saldo = 0;

console.log(cliente1)

var cliente2 = new cliente();
var cliente3 = new cliente();

class clientepremium{
    constructor(nome,cpf,saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.saldo = saldo;
    }
}

var clienteEspecial = new clientepremium ("Cesar ", "8888", 100)
console.log(clienteEspecial)