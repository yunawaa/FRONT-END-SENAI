var usuarioCadastrado = "fulano@gmail.com";
var senhaCadastrado = "123";

$("#senha").on("keydown", function(){
    let caracteres = $("#senha").val().length + 1;
    
    if(caracteres <= 8){
        $("#verificaSenha").html(`<p class="text-success"> Nº de caracteres: ${caracteres} </p>`);
    }else{
        $("#verificaSenha").html(`<p class="text-danger"> Nº de caracteres excedido! Máx = 8!  </p>`)
        $("#senha").attr("disabled", "true");

        let digitarSenha = confirm("Deseja digitar novamente?");

        if(digitarSenha == true){
            $("#senha").val("");
            $("#senha").attr("disabled", "true");
        }
    }
})

$("#btnLogar").on("click", function(){
    let usuarioDigitado = $("#email").val();
    let senhaDigitado = $("#senha").val();
    
    if(usuarioDigitado == usuarioCadastrado & senhaDigitado == senhaCadastrado){
        $("#resposta").html(`<p class="text-success"> Usuário encontrado! </p>`);
    }else{
        $("#resposta").html(`<p class="text-danger"> Usuário não encontrado! </p>`);


    }
});

// $("#teste").fadeOut(800);
$("#teste").slideUp(800);

$("#btnLogar").on("mouseenter", function(){
    $("#teste").slideDown(800);

})
