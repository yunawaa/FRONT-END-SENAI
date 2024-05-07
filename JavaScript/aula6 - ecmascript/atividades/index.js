// 1) Fazer um input de pesquisa onde irá pesquisar se o nome de um jogo (em um array de pelomenos 3 elementos) existe, se existir, mande uma mensagem que ele foi encontrado, caso não, mande uma mensagem que não foi encontrado!
// 2) Fazer um algoritmo com inputs onde possa implementar as funções de replace e replace all


const btnPesquisar = document.querySelector("#btnresposta");
const jogos = ["Resident Evil","Dota 2", "Free Fire", "League of Legends","Castlevania"]
btnPesquisar.addEventListener('click',pesquisar);

function pesquisar(){
    let jogopesquisado = document.querySelector("#inputresposta").value;
    let respostapesquisa = jogos.includes(jogopesquisado);
    let resposta = document.querySelector("#pesquisaresposta")

    if(respostapesquisa == true){
        resposta.innerHTML = `Jogo encontrado! Item da pesquisa: ${jogopesquisado}`;
    }else{
        resposta.innerHTML = `Jogo ${jogopesquisado} não foi encontrado!`
    }
}

const btnreplace = document.querySelector("#btnreplace");
const btnreplaceall = document.querySelector("#btnreplaceall");

btnreplace.addEventListener("click",substituirum);
btnreplaceall.addEventListener("click", substituirtodos);

function substituirum(){
    let texto = document.querySelector("#texto").value;
    let achartermo = document.querySelector("#achartermo").value;
    let trocartermo = document.querySelector("#trocartermo").value;

    let textoatualizado = texto.replace(achartermo,trocartermo);
    document.querySelector("#texto").value=textoatualizado;
}

function substituirtodos(){
    let texto = document.querySelector("#texto").value;
    let achartermo = document.querySelector("#achartermo").value;
    let trocartermo = document.querySelector("#trocartermo").value;

    let textoatualizado = texto.replaceAll(achartermo,trocartermo);
    document.querySelector("#texto").value = textoatualizado;

}

