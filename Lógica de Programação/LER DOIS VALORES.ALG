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
       escreval ("N�meros iguais!")
       senao
       se (valorUm > valorDois) entao
       escreval ("Primeiro n�mero � maior.")
       senao
       se (valorUm < valorDois) entao
       escreval ("Segundo n�mero � maior.")
       senao
       fimSe
       fimSe
       fimSe
fimalgoritmo