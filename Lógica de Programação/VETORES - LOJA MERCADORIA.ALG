algoritmo "VETORES - n�meros forma inversa"
var
          contador : inteiro
          numeros : vetor [1..10] de inteiro
          


inicio

          escreval ("Escreva 10 n�meros, os colocarei na ordem inversa: ")
          para contador <- 1 ate 10 faca
          leia(numeros[contador])
          fimPara

          para contador <- 10 ate 1 passo -1  faca
          escreval (numeros[contador])
          fimpara
          
          
          
fimalgoritmo