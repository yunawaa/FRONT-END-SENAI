algoritmo "conversor dolar"
var
    cotacao, dolar, resultado : real
inicio
    escreval ("Digite a cota��o atual do d�lar: ")
    leia (cotacao)
    escreval ("Digite a quantidade de d�lares a serem convertidos: ")
    leia (dolar)
    resultado <- dolar * cotacao
    escreval ("O valor convertido � de ",resultado)
fimalgoritmo