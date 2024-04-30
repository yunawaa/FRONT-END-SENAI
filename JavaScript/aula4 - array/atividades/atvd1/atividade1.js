alert ("Olá! Dividiei o valor da conta para que todos os clientes paguem o mesmo valor.")

var qtdclientes = Number (window.prompt ("Quantos clientes estão na mesa?"))
var valortotal =  Number (window.prompt ("Qual o valor total da conta?"))

var divisao = valortotal/qtdclientes
alert ("Cada um deve pagar "+divisao)