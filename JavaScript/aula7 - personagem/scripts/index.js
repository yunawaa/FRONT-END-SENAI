// Faça um site, onde você pode ter um personagem ao seu critério ( Um pokémon ou um protagonista) 
// com seus diversos atributos ( como vida, dano ou powerups) e no html não só possamos acrescentar mais 
// estatísticas a ele como possamos estar acompanhando sua evolução ( ver visualmente o acréscimo acontecendo )
class Personagem{
    constructor(nome,vida,dano,itemprincipal){
        this.nome = nome;
        this.vida = vida;
        this.dano = dano;
        this.items = [itemprincipal];
       
        this.atacar = function(){
        }

        this.curar = function(){
        }

        this.evoluir = function(){
        }

        this.causardano = function(){
        }
    }
}

var link = new Personagem("Yone",10,1,"Espadas");
function listarEstatisticas(){
    let estatisticas = document.querySelector("#estatisticas");

    estatisticas.innerHTML = `
    <p> ✏️ Nome : ${link.nome}</p>
    <p> 💚 Vida : ${link.vida}</p>
    <p> ⚔️ Dano : ${link.dano}</p>
    <p> 🪀 Items : ${link.items}</p>
    <button id="atacar" onclick="atacar(${link.dano})">⚔️ATACAR</button>
    <button id="ganharXP" onclick="curar(1)">❤️‍🩹Regenerar</button>
    <button id="ganharXP" onclick="upar(1)">🎮Ganhar XP</button>
    <button id="tomarDano" onclick="tomarDano(1)">☠️Receber dano</button>
    `
}

function tomarDano(dano){
    link.vida -= dano;
    if(link.vida <= 0){
        let personagem = document.querySelector("#personagem");
        personagem.setAttribute("src","images/yone2.jpg");
        listarEstatisticas();
    }else{
        listarEstatisticas();
    }
}

function curar(cura){
    link.vida += cura;
    listarEstatisticas();
}

function atacar(dano){
    alert(`Você causou ${dano} de dano ao inimigo!`)
}

listarEstatisticas();
