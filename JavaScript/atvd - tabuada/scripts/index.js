$(document).ready(function() {
    $("#mostrarTabuada").click(function() {
        var numero = $("#numero").val();
        var tabuada = $("#tabuada");

        if (numero < 1 || numero > 10) {
            tabuada.html("<p>Você não inseriu nenhum número. Insira algum número de 1 a 10.</p>");
        } else {
            var tabuadaHTML = "<h2>Tabuada do " + numero + ":</h2>";
            for (var i = 1; i <= 10; i++) {
                tabuadaHTML += "<p>" + numero + " x " + i + " = " + (numero * i) + "</p>";
            }
            tabuada.html(tabuadaHTML);
        }
    });
});

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}