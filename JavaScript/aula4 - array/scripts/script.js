// var filme1 = "A era do gelo";
// var filme2 = "Jack Estripador";
// var filme3 = "V de Vingança";
// var filme4 = "Harry Potter";

// ARRAY
var filmes = Array();
filmes[0] = "A era do gelo";
filmes[1] = "Jack Estripador";
filmes[2] = "V de Vingança";
filmes[3] = "Harry Potter";
let main = document.querySelector("main");

for (var contador = 0;contador <= 3;contador++){
    main.innerHTML += `<div class="posts">
        ${filmes[contador]}
    </div>`;
}

main.innerHTML += `<h1> METODO 2</h1>`;

// metodo 2
var produtos = ["Pen-drive","X-Salada","Chocolate","Açaí", "Ps5"];

// comandos de array
// adicionar no começo
produtos.unshift("Pipa");

// adicionar no fim
produtos.push("Bicicleta");

//remover no começo
produtos.shift();

// remover no fim
produtos.pop();

// adicionar ou remover de acordo com elemento, índice, quantos serão afetados, qual elemento adicionado
// segundo valor = deleteCount - quantos deletados
produtos.splice(2,1, "Bota")

// clona o array para uma nova variável
var produtosNovos = produtos.slice();

produtos.forEach((elemento) => {
    main.innerHTML += `<div class="posts">
    ${elemento}
</div>`;
 
});