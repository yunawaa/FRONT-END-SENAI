function replaceEcma() {
    var frase = "Olá mundo, o mundo está maravilhoso, pois todo mundo está sorrindo";
    var resposta = document.querySelector('#resposta');

    resposta.innerHTML = frase;

    var fraseModificada =  frase.replace("mundo", "ryan");
    resposta.innerHTML += `<br>${fraseModificada}`;

    // replaceAll = substitui todos os termos de string
    var fraseModificada2 =  frase.replaceAll("mundo", "miqueias");
    resposta.innerHTML += `<br>${fraseModificada2}`;
}  

    function pesquisar(){
        var filmes = ["Vingadores", "Pokemon", "Era do gelo", "Batman", "Coringa"];
        var pesquisa = filmes.includes("vingadores");
        var resposta2 = document.querySelector("#resposta2");

        if(pesquisa ==true){
            resposta2.innerHTML = `Opa! O termo foi encontrado :)`;    
        }else{
            resposta2.innerHTML = `Opa... O termo não foi encontrado :(`;
        }

        // indexOf verifica se existe, também retorna indice
        var termoPesquisado = "TESTE";
        var pesquisa2 = filmes.indexOf(termoPesquisado);

        if(pesquisa2 == -1){
            resposta2.innerHTML += `<br>O elemento ${termoPesquisado} digitado não foi encontrado!`;
        }else{
            resposta2.innerHTML += `<br>O elemento ${filmes[pesquisa2]} foi encontrado!`
        }

}

function pad(){
    var nome = "Victor";
    var sobreNome = ".Santos";
    var cartaoFinal = "9999";
    var totalCaracteres = (nome + sobreNome).length;
    var resposta3 = document.querySelector("#resposta3");

    resposta3.innerHTML = nome.padStart(totalCaracteres,sobreNome);
    resposta3.innerHTML += "<br>"+nome.padEnd(8,sobreNome);
    resposta3.innerHTML += "<br>"+cartaoFinal.padStart(16,"*");
    

}

// executar functions
replaceEcma();
pesquisar();
pad();


// aula 7
function objectEntries(){
    const aluno = {
        matricula : 180,
        cursofinalizados : ["Front-end", "UX","Banco de dados"],
        curso : "Dominó",
        nome : "Raul",

    }

    // retorna apenas atributos do objeto (matrícula, cursos finalizados)
    var alunokey = Object.keys(aluno);
    console.log(alunokey);

    // retorna apenas atributos e seus valores (matrícula, 180, cursos finalizados, array)
    var alunoEntries = Object.entries(aluno);
    console.log(alunoEntries);
    

    // retorna somente valor (dominó, array)
    console.log(aluno.matricula);

    // map - faz um processo para cada elemento do nosso array
    
    var teste = ["Matricula","Front-end"];
    var mapresultado = teste.map((elemento) => `<li>${elemento}<li/>`)
    console.log(mapresultado)
    
}

function Promises(){

}

// executar functions