algoritmo "PARA - múltiplo de 10"
var
      contador : inteiro
inicio
      para contador <- 1 ate 100 passo 1 faca
      se (contador % 10 = 0) entao
      escreval (contador, " Múltiplo de 10")
      senao
      escreval (contador)
      fimSe
      fimPara
fimalgoritmo