Algoritmo "QUESTÃO 5"

Var
           V1 : vetor[1..5] de inteiro
           V2 : vetor[1..5] de inteiro
           i  : inteiro
           contadorIguais : inteiro


Inicio
           para i de 1 ate 5 faca
           escreval("Digite o ", i, "º número para o vetor V1: ")
           leia(V1[i])
           limpatela ()
           fimpara


           para i de 1 ate 5 faca
           escreval("Digite o ", i, "º número para o vetor V2: ")
           leia(V2[i])
           limpatela ()
           fimpara
           contadorIguais := 0

           para i de 1 ate 5 faca
           se V1[i] = V2[i] entao
           contadorIguais := contadorIguais + 1
           limpatela ()
           fimse
           fimpara
           escreval("Quantidade de vezes que V1 e V2 possuem os mesmos números nas mesmas posições: ", contadorIguais)



Fimalgoritmo