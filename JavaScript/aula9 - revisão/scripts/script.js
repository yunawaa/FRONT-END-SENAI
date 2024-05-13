$("#listarTabuada").on("click", function(){
    let nTabuada = $("#nTabuada").val()
    let resultado = document.querySelector("#tabuadaDesejada")
    resultado.innerHTML = "";

    if(nTabuada > 10 || nTabuada < 0 || nTabuada == null){
        resultado.innerHTML = `Valor inválido. Insira um novo valor entre 0 e 10!`;

    }else{
        for(var contador = 1; contador <=10;contador++){
            resultado.innerHTML += `
            <p> ${nTabuada} x ${contador} = ${nTabuada * contador} </p>
            
            `
         }
    }
});

document.querySelector("#btnTema").addEventListener("click", function(){
    
    let corpo = document.querySelector("body");
    if (corpo.classList.contains("temaClaro")){
        corpo.classList.replace("temaClaro","temaEscuro");
    }else{
        corpo.classList.replace("temaEscuro","temaClaro");
    }
    
})


$("#abrir").on("click",function(){
    $(".caixa").slideDown(500);
});

$("#fechar").on("click",function(){
    $(".caixa").slideUp(500);

});
$("#animar").on("click",function(){
    $(".caixa").animate({width : "500px"});
});
