Algoritmo "QUESTÃO 1"

Var
           contador : inteiro
           notas:vetor[1..5]de real
           nomes:vetor[1..5]de caractere
           somatotal, mediatotal: real

Inicio
           enquanto (contador < 5)faca
           contador <- contador+1
           Escreval("NOTAS DA TURMA")
           Escreval("Escreva o nome do(a)",contador," aluno(a):")
           leia(nomes[contador])

           Escreval("Escreva a nota do (a)",contador," aluno(a):")
           leia(notas[contador])
           limpatela()

           somatotal <- somatotal+notas[contador]
           mediatotal <- somatotal/5
           fimenquanto

           Se ((notas[1])>5)Entao
           Escreval("A media geral da turma foi:",mediatotal )

           Escreval("O aluno ",(nomes[1])," Foi Aprovado !!!!")
           senao
           Escreval("A media geral da turma foi:",mediatotal )

           Escreval("O aluno ",(nomes[1])," Foi Reprovado !!!!")
           fimse

           Se ((notas[2])>5)Entao
           Escreval("O aluno ",(nomes[2])," Foi Aprovado !!!!")
           senao
           Escreval("O aluno ",(nomes[2])," Foi Reprovado !!!!")
           fimse

           Se ((notas[3])>5)Entao
           Escreval("O aluno",(nomes[3])," Foi Aprovado !!!!")
           senao
           Escreval("O aluno ",(nomes[3])," Foi Reprovado !!!!")
           fimse

           Se ((notas[4])>5)Entao
           Escreval("O aluno ",(nomes[4])," Foi Aprovado !!!!")
           senao
           Escreval("O aluno ",(nomes[4])," Foi Reprovado !!!!")
           fimse

           Se ((notas[5])>5)Entao
           Escreval("O aluno ",(nomes[5])," Foi Aprovado !!!!")
           senao
           Escreval("O aluno ",(nomes[5])," Foi Reprovado !!!!")
           fimse

Fimalgoritmo