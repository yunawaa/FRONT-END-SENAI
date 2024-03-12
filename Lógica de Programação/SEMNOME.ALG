algoritmo "semnome"

var
    alunos : vetor[1..2] de caractere
    notasAval1 : vetor[1..2] de real
    notasAval2 : vetor[1..2] de real
    notasAval3 : vetor[1..2] de real
    contador : inteiro
    mediaFinal : real

inicio

    para contador <-  1 ate 2 faca
    escreval ("Insira o nome do",contador,"°", " Aluno:")
    leia (alunos[contador])
    limpaTela ()
    escreval ("Digite a primeira nota do aluno: ", alunos [contador])
    leia (notasAval1 [contador])
    limpaTela ()
    escreval ("Digite a segunda nota do aluno: ", alunos [contador])
    leia (notasAval2 [contador])
    limpaTela()
    escreval ("Digite a terceira nota do aluno: ", alunos [contador])
    leia (notasAval3 [contador])
    limpaTela()
    
    mediaFinal <- (notasAval1[contador]+notasAval2[contador]+notasAval3[contador])/3

    se (mediaFinal >= 8) entao
    escreval ("O aluno foi aprovado com a média de",mediaFinal)
    senao
    escreval ("Reprovado! Média de ",mediaFinal)

    fimSe
    fimPara

fimalgoritmo