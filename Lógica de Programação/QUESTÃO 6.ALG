algoritmo "QUESTÃO 6"
var
     nomes: vetor [1..10] de caractere
     contador : inteiro
     extra : caractere
inicio

        escreval ("Digite 10 nomes: ")
        para contador <- 1 ate 10 faca
        leia (nomes[contador])
        fimPara
        
        escreval ("Escreva mais um nome: ")
        leia (extra)
        
        se (extra<>nomes[contador]) entao
        escreval ("NÃO ACHEI!")
        senao
        se (extra=nomes[contador]) entao
        escreval ("ACHEI!")
        fimse
        fimse


fimalgoritmo