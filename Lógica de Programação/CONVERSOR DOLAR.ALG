algoritmo "conversor dolar"
var
    cotacao, dolar, resultado : real
inicio
    escreval ("Digite a cotação atual do dólar: ")
    leia (cotacao)
    escreval ("Digite a quantidade de dólares a serem convertidos: ")
    leia (dolar)
    resultado <- dolar * cotacao
    escreval ("O valor convertido é de ",resultado)
fimalgoritmo