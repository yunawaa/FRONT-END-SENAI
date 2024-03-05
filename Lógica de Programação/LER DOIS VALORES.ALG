algoritmo "ler dois valores"
var
    valorUm :  real
    valorDois : real
inicio
       escreval ("Digite o primeiro valor: ")
       leia (valorUm)
       escreval ("Digite o segundo valor: ")
       leia (valorDois)
       se (valorUm = valorDois) entao
       escreval ("Números iguais!")
       senao
       se (valorUm > valorDois) entao
       escreval ("Primeiro número é maior.")
       senao
       se (valorUm < valorDois) entao
       escreval ("Segundo número é maior.")
       senao
       fimSe
       fimSe
       fimSe
fimalgoritmo