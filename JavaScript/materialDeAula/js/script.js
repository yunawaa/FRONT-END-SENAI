console.log('Olá mundo');

//caixas de texto (input)
//prompt = recebe um texto
//window.prompt("Qual é o seu nome?");

//alert = manda uma mensagem
//window.alert("FRONT É TOP");

// confirm = pergunta confirmar
//window.confirm("Deseja baixar esse aquivo novamente?")

var melancia = "Uma variável de teste";
var ligado = true;
var numero = 91;
var objeto = []

//objeto = tipo de coletânea de dados, onde podemos inserir, remover e pesquisar


//type of = verifica o tipo da variável

//const = constante, uma variável que não pode ser sobrescrita
const fixo = "Não posso mudar!";

// var escopo global e sobrescrevível
// let escopo local e sobrescrevível
// const escopo global e não sobrescrevivel 

function teste (){
    let temporaria = "Rodando no function let";
    var temporarioVar = "Rodando no function";

    nome = "Gaby";

    console.log (temporaria);
    console.log (temporarioVar);
}

//output = resultado
//input = numero1, numero2
//coleta dois números e soma ele, após isso, imprime na tela o resultado

function somar (){
    window.alert("Seja bem-vindo ao algoritmo de somar!");
    let numero1 = Number(window.prompt("Digite o seu primeiro número:"));
    let numero2 = Number(window.prompt("Digite o seu segundo número:"));
    //ParseInt = números inteiros
    //ParseFloat = números reais
    //Number = números inteiros e reais

    //window.alert(typeof numero1)

    var resultado = numero1 + numero2;

//concatenação
    window.alert("Resultado dessa soma é de: " +resultado);
    window.alert(`Resultado é de : ${resultado}`);
    
}
somar();
